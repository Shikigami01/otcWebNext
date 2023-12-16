import type { trackListType } from '../../types/archiveList';
import styles from './styles.module.scss';

type Props = {
  data: trackListType[];
};

export const SongList: React.FC<Props> = ({ data }) => {
  return (
    <ol>
      {data.map((item) => {
        return (
          <li className={styles.item} key={item.trackName}>
            {item.trackName}
            {item.composerName != null && ` / ${item.composerName}`}
            <br />
            {item.isOriginalSongFlag === true && `(原曲: ${item.originalSongName})`}
          </li>
        );
      })}
    </ol>
  );
};
