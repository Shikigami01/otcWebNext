import { ArchiveList } from '@/components/ArchiveList';
import { Title } from '@/components/Title';
import { Metadata } from 'next';
import styles from './styles.module.scss';
import { archiveListData } from '@/assets/archiveList';

export const metadata: Metadata = {
  title: 'Archive',
};

const Archive = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title>Archive List</Title>
      </div>
      <ArchiveList data={archiveListData} />
    </div>
  );
};

export default Archive;
