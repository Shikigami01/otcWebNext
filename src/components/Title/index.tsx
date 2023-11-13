import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
