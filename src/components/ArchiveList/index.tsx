import Link from 'next/link';
import { archiveListData } from '../../assets/archiveList';
import { Artwork } from '../Artwork';
import styles from './styles.module.scss';
import { archiveListType } from '@/types/archiveList';

type Props = {
  data: Record<number, archiveListType>;
};

export const ArchiveList: React.FC<Props> = ({ data }) => {
  // archiveListDataを `{ id: number, title: string }[]` の型に変換
  const convertedArchiveListData: { id: number; title: string }[] = Object.values(
    archiveListData
  ).map((item) => {
    return {
      id: item.id,
      title: item.title,
    };
  });

  convertedArchiveListData.reverse();

  return (
    <ul className={styles.list}>
      {convertedArchiveListData.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <Link href={`/archive/${item.id}`}>
              <Artwork id={item.id} name={item.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
