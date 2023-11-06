import { archiveListData } from '../../assets/archiveList';
import type { Meta, StoryObj } from '@storybook/react';
import { ArchiveList } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'ArchiveList',
  component: ArchiveList,
  args: {
      data: archiveListData,
  },
} satisfies Meta<typeof ArchiveList>;

export default meta;

export const Default: Story = {};
