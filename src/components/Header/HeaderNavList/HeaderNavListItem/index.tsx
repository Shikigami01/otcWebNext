import type React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

type Props = {
  url: string;
  name: string;
};

export const HeaderNavlistItem: React.FC<Props> = ({ url, name }) => {
  return (
    <Link className={styles.wrapper} href={url}>
      {name}
    </Link>
  );
};
