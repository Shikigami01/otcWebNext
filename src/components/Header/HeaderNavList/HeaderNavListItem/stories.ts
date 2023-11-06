import type { Meta, StoryObj } from '@storybook/react';
import { HeaderNavlistItem } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Header/HeaderNavlist/HeaderNavlistItem',
  component: HeaderNavlistItem,
  args: {
    url: '/',
    name: 'Home',
  },
} satisfies Meta<typeof HeaderNavlistItem>;

export default meta;

export const Default: Story = {};
