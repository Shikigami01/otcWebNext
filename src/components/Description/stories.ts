import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Description',
  component: Description,
  args: { children: 'なんか書いとけ。' },
} satisfies Meta<typeof Description>;

export default meta;

export const Default: Story = {};
