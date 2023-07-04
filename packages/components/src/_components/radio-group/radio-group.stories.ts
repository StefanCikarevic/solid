import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  args,
  argTypes,
  parameters: {...parameters},
  decorators: [withActions] as any
};


/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};