import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Footer',
  component: Footer,
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;

export const Default: Story = {};
