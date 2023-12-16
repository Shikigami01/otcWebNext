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
        composerName: '敷き紙',
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
        originalSongName: '',
        composerName: '敷き紙',
      },
    ],
  },
};

export const noCOmposerName: Story = {
  args: {
    data: [
      {
        trackName: 'ふたりの',
        isOriginalSongFlag: true,
        originalSongName: '他愛も無い二人の博物誌',
        composerName: '',
      },
    ],
  },
};

export const noBoth: Story = {
  args: {
    data: [
      {
        trackName: 'ふたりの',
        isOriginalSongFlag: false,
        originalSongName: '',
        composerName: '',
      },
    ],
  },
};
