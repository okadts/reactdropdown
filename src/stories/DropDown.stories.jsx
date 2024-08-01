import { useArgs } from '@storybook/preview-api';
import { useEffect } from 'react';
import { fn } from '@storybook/test';
import { DropDown } from '../../lib/DropDown.tsx'

const options = [
  { label: "Dog", value: 1 },
  { label: "Bird", value: 2 },
  { label: "Snake", value: 3 },
  { label: "Mouse", value: 4 },
  { label: "Bat", value: 5 },
]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'DropDown',
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
    optionHighlightedColor: { control: 'color' },
    optionsComponent: { table: { disable: true }},
    onClick: { table: { disable: true }},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export default meta;



// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ReactDropDown = {
  args: {
    multiple: true,
    options,
    model: [options[0]],
  },
  render: function Render(args) {
    const [{ multiple }, updateArgs] = useArgs();

    // multiple ? updateArgs({ model: [options[0]] }) : updateArgs({ model: options[0] });
    useEffect(() => {
      // This effect will run whenever the args change
      if (!multiple) {
        updateArgs({ model: options[0] });
      } else {
        updateArgs({ model: [options[0]] });
      }
    }, [multiple, updateArgs]);
 
    function onChange(value) {
      multiple ? updateArgs({ model: [...value] }) : updateArgs({ model: value });
    }
 
    return <DropDown {...args} onChange={(value) => onChange(value)}/>;
  },
};
