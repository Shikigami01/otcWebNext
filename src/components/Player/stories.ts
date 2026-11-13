import type { Meta, StoryObj } from '@storybook/nextjs';
import { Player } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Player',
  component: Player,
  args: {
    isListen: true,
    id: 14,
  },
} satisfies Meta<typeof Player>;

export default meta;

export const Default: Story = {};
