import Image from 'next/image';
import styles from './styles.module.scss';

export const MainVisual = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.img}
        src="/image/main-visual.svg"
        alt="Over The Coffee Main Visual"
        width="400"
        height="323"
        loading="eager"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};
