import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-breadcrumb');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

export default {
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-breadcrumb in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
