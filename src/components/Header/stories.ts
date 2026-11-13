import type { Meta, StoryObj } from '@storybook/nextjs';
import { Header } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Header',
  component: Header,
  args: {},
} satisfies Meta<typeof Header>;

export default meta;

export const Default: Story = {};
