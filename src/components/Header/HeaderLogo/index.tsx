import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export const HeaderLogo = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <Image className={styles.icon} src="/image/logo.svg" alt="logo" width={30} height={30} />
    </Link>
  );
};
