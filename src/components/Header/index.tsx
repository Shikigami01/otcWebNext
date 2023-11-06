import { HeaderLogo } from './HeaderLogo';
import { HeaderNavlist } from './HeaderNavList';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <HeaderLogo />
        <HeaderNavlist />
      </div>
    </div>
  );
};
