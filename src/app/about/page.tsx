import { Description } from '@/components/Description';
import { LinkList } from '@/components/LinkList';
import { Title } from '@/components/Title';
import { Metadata } from 'next';
import styles from './styles.module.scss';

export const metadata: Metadata = { title: 'About' };

const About = () => {
  return (
    <>
      <section>
        <div className={styles.title}>
          <Title>About</Title>
        </div>
        <Description>
          Chiptune, Tropical House, Future Bass, Future Coreをメインに作る音楽同人サークルです。
          <br />
          東方Project、アイカツ！、ブルーアーカイブの楽曲アレンジをメインに活動しています。
        </Description>
      </section>
      <section>
        <div className={styles.title}>
          <Title>Profile</Title>
        </div>
        <Description>
          Name : 敷き紙
          <br />
          音楽とWEBコーディングができます。好きなHTMLタグはmarquee。
        </Description>
      </section>
      <section>
        <div className={styles.title}>
          <Title>Link</Title>
        </div>
        <LinkList />
      </section>
    </>
  );
};

export default About;
