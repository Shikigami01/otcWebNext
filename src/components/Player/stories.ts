import type { Meta, StoryObj } from '@storybook/react';
import { Player } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Player',
  component: Player,
  args: {
    id: 14,
  },
} satisfies Meta<typeof Player>;

export default meta;

export const Default: Story = {};
