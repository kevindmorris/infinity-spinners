import type { Meta, StoryObj } from "@storybook/react";

import PulseSpinner from "../PulseSpinner";

const meta = {
  title: "PulseSpinner",
  component: PulseSpinner,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
    },
    color: {
      control: "color",
    },
    speed: { control: "number" },
    weight: { control: "number" },
  },
} satisfies Meta<typeof PulseSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3,
  },
};
