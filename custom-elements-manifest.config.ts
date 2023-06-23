// eslint-disable-next-line
// @ts-nocheck

import { generateCustomData } from 'cem-plugin-vs-code-custom-data-generator';
import { parse } from 'comment-parser';
// import { pascalCase } from 'pascal-case';

import { author, description, homepage, license, name, version } from './package.json';

// function noDash(string) {
//   return string.replace(/^\s?-/, '').trim();
// }

function replace(string: string, terms: { from: string; to: string }[]) {
  terms.forEach(({ from, to }) => {
    string = string?.replace(from, to);
  });

  return string;
}

// function isQueryDecorator(decorator) {
//   return decorator.name === 'query';
// }

// function markMemberAsPrivate(member) {
//   if (member.decorators?.some(isQueryDecorator)) {
//     member.privacy = 'private';
//   }
// }

export default {
  files: ['./src/components/**/!(*.stories|*.spec|*.test|*.style).ts'],
  lit: true,
  output: '../custom-elements.json',
  plugins: [
    // Append package data
    {
      name: 'solid-package-data',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest.package = { name, description, version, author, homepage, license };
      }
    },
    {
      name: 'remove-html-members',
      moduleLinkPhase({ moduleDoc }) {
        moduleDoc.declarations?.forEach(declaration => {
          declaration.members = declaration.members?.filter(member => {
            const typeText = member.type?.text || '';
            const types = typeText.split('|').map(type => type.trim());

            return !types.some(type => type.startsWith('HTML'));
          });
        });
      }
    },

    // Parse custom jsDoc tags
    {
      name: 'solid-custom-tags',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find(declaration => declaration.name === className);
            const customTags = ['animation', 'dependency', 'documentation', 'since', 'status', 'title'];
            let customComments = '/**';

            node.jsDoc?.forEach(jsDoc => {
              jsDoc?.tags?.forEach(tag => {
                const tagName = tag.tagName.getText();

                if (customTags.includes(tagName)) {
                  customComments += `\n * @${tagName} ${tag.comment}`;
                }
              });
            });

            const parsed = parse(`${customComments}\n */`);
            parsed[0].tags?.forEach(t => {
              switch (t.tag) {
                // Animations
                case 'animation':
                  if (!Array.isArray(classDoc['animations'])) {
                    classDoc['animations'] = [];
                  }
                  classDoc['animations'].push({
                    name: t.name,
                    description: noDash(t.description)
                  });
                  break;

                // Dependencies
                case 'dependency':
                  if (!Array.isArray(classDoc['dependencies'])) {
                    classDoc['dependencies'] = [];
                  }
                  classDoc['dependencies'].push(t.name);
                  break;

                // Value-only metadata tags
                case 'documentation':
                case 'since':
                case 'status':
                case 'title':
                  classDoc[t.tag] = t.name;
                  break;

                // All other tags
                default:
                  if (!Array.isArray(classDoc[t.tag])) {
                    classDoc[t.tag] = [];
                  }

                  classDoc[t.tag].push({
                    name: t.name,
                    description: t.description,
                    type: t.type || undefined
                  });
              }
            });
          }
        }
      }
    },
    // {
    // name: 'solid-react-event-names',
    // analyzePhase({ ts, node, moduleDoc }) {
    // switch (node.kind) {
    // case ts.SyntaxKind.ClassDeclaration: {
    // const className = node.name.getText();
    // const classDoc = moduleDoc?.declarations?.find(declaration => declaration.name === className);

    // if (classDoc?.events) {
    // classDoc.events.forEach(event => {
    // event.reactName = `on${pascalCase(event.name)}`;
    // });
    // }
    // }
    // }
    // }
    // },
    {
      name: 'solid-translate-module-paths',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest?.modules?.forEach(mod => {
          //
          // CEM paths look like this:
          //
          //  src/components/button/button.ts
          //
          // But we want them to look like this:
          //
          //  components/button/button.js
          //
          const terms = [
            { from: /^src\//, to: '' }, // Strip the src/ prefix
            { from: /\.(t|j)sx?$/, to: '.js' } // Convert .ts to .js
          ];

          mod.path = replace(mod.path, terms);

          for (const ex of mod.exports ?? []) {
            ex.declaration.module = replace(ex.declaration.module, terms);
          }

          for (const dec of mod.declarations ?? []) {
            if (dec.kind === 'class') {
              for (const member of dec.members ?? []) {
                if (member.inheritedFrom) {
                  member.inheritedFrom.module = replace(member.inheritedFrom.module, terms);
                }
              }
            }
          }
        });
      }
    },
    // Generate custom VS Code data
    generateCustomData({
      outdir: 'dist',
      cssFileName: null
    })
  ]
};
