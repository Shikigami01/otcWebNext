import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const Description: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.description}>{children}</h1>;
};
