import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataListInput from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: DataListInput,
} as ComponentMeta<typeof DataListInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataListInput> = (args) => <DataListInput {...args} />;

export const Default = Template.bind({});