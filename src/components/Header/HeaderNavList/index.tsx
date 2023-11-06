import { HeaderNavlistItem } from './HeaderNavListItem';
import styles from './styles.module.scss';

const LINK_ITEM = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/about',
    name: 'About',
  },
  {
    url: '/archive',
    name: 'Archive',
  },
];

export const HeaderNavlist = () => {
  return (
    <ul className={styles.list}>
      {LINK_ITEM.map((item, index) => {
        return (
          <li key={index}>
            <HeaderNavlistItem url={item.url} name={item.name} />
          </li>
        );
      })}
    </ul>
  );
};
