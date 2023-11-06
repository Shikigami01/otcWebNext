import type { Meta, StoryObj } from '@storybook/react';
import { Artwork } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Artwork',
  component: Artwork,
  args: {
    id: 14,
    name: '異世界の秘密を曝くのはもう懲り懲りだよ〜!!!',
  },
} satisfies Meta<typeof Artwork>;

export default meta;

export const Default: Story = {};
