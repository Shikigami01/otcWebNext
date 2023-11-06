import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Title',
  component: Title,
  args: { children: 'About' },
} satisfies Meta<typeof Title>;

export default meta;

export const Default: Story = {};
