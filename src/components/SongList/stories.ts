import type { Meta, StoryObj } from '@storybook/react';
import { SongList } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'SongList',
  component: SongList,
  args: {
    data: [
      {
        trackName: 'ふたりの',
        isOriginalSongFlag: true,
        originalSongName: '他愛も無い二人の博物誌',
      },
    ],
  },
} satisfies Meta<typeof SongList>;

export default meta;

export const Default: Story = {};

export const noOriginal: Story = {
  args: {
    data: [
      {
        trackName: 'ふたりの',
        isOriginalSongFlag: false,
        originalSongName: '他愛も無い二人の博物誌',
      },
    ],
  },
};
