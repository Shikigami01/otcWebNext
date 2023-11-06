import type { Meta, StoryObj } from '@storybook/react';
import { MainVisual } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'MainVisual',
  component: MainVisual,
  args: { chidlren: 'About' },
} satisfies Meta<typeof MainVisual>;

export default meta;

export const Default: Story = {};
