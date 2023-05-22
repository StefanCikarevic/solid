import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-textarea');
const { generateTemplate } = storybookTemplate('sd-textarea');

export default {
  title: 'Components/sd-textarea',
  component: 'sd-textarea',
  args,
  argTypes,
};


/**
 * Default: This shows sd-textarea in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
