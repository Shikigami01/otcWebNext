import type { Meta, StoryObj } from '@storybook/nextjs';
import { LinkList } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'LinkList',
  component: LinkList,
  args: { chidlren: 'About' },
} satisfies Meta<typeof LinkList>;

export default meta;

export const Default: Story = {};
