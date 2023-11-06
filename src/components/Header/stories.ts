import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Header',
  component: Header,
  args: {},
} satisfies Meta<typeof Header>;

export default meta;

export const Default: Story = {};
