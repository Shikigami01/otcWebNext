import type { Meta, StoryObj } from '@storybook/react';
import { HeaderNavlist } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Header/HeaderNavlist',
  component: HeaderNavlist,
  args: {},
} satisfies Meta<typeof HeaderNavlist>;

export default meta;

export const Default: Story = {};
