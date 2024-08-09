import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'small',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
};
