import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLogo } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Header/HeaderLogo',
  component: HeaderLogo,
  args: {},
} satisfies Meta<typeof HeaderLogo>;

export default meta;

export const Default: Story = {};
