import Image from 'next/image';
import styles from './styles.module.scss';

type Props = {
  id: number;
  name: string;
};

export const Artwork: React.FC<Props> = ({ id, name }) => {
  const pathUrl = `/image/artwork/${String(id).padStart(4, '0')}.webp`;

  return (
    <Image
      className={styles.img}
      src={pathUrl}
      alt={name}
      width="1024"
      height="1024"
      loading="lazy"
      unoptimized
    />
  );
};
