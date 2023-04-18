import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-split-panel');
const { defaultTemplate } = storybookTemplates('sd-split-panel');

export default {
  title: 'Components/sd-split-panel',
  component: 'sd-split-panel',
  args,
  argTypes,
};


/**
 * Default: This shows the split-panel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
