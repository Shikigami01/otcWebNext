import { MainVisual } from '@/components/MainVisual';
import { Metadata } from 'next';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.mainVisual}>
      <MainVisual />
    </div>
  );
};

export default Home;
