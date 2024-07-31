import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';
import { DropDown, DropDownOption } from '../components/DropDown'

const options: DropDownOption[] = [
  { label: "Dog", value: 1 },
  { label: "Bird", value: 2 },
  { label: "Snake", value: 3 },
  { label: "Mouse", value: 4 },
  { label: "Bat", value: 5 },
]

let valueMulti = [options[0]];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'React DropDown',
  component: DropDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    optionSelectedColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Multiple: Story = {
  args: {
    multiple: true,
    options,
    model: valueMulti
  },
  render: function Render(args) {
    const [,updateArgs] = useArgs();
 
    function onChange(value: DropDownOption[]) {
      console.log(value);
      updateArgs({ model: [...value] });
    }
 
    return <DropDown {...args} onChange={(value) => value ? onChange(value) : []}/>;
  },
};
