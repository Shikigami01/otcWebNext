import type { Meta, StoryObj } from '@storybook/react';
import { LinkList } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'LinkList',
  component: LinkList,
  args: { chidlren: 'About' },
} satisfies Meta<typeof LinkList>;

export default meta;

export const Default: Story = {};
