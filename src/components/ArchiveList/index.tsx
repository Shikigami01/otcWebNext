import type { archiveListData } from '../../assets/archiveList';
import { Artwork } from '../Artwork';
import styles from './styles.module.scss';

type Props = {
  data: typeof archiveListData;
};

export const ArchiveList: React.FC<Props> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <a href={`/archive/${item.id}`}>
              <Artwork id={item.id} name={item.title} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
