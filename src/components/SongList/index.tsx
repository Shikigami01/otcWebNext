import type { trackList } from '../../types/archiveList';
import styles from './styles.module.scss';

type Props = {
  data: trackList;
};

export const SongList: React.FC<Props> = ({ data }) => {
  return (
    <ol>
      {data.map((item) => {
        return (
          <li className={styles.item} key={item.trackName}>
            {item.trackName}
            <br />
            {item.isOriginalSongFlag === true && (
              <div className={styles.text}>(原曲: {item.originalSongName})</div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
