import { Title } from '@/components/Title';
import styles from './styles.module.scss';
import { archiveListData } from '@/assets/archiveList';
import { Artwork } from '@/components/Artwork';
import { Player } from '@/components/Player';
import { SongList } from '@/components/SongList';
import type { archiveListType } from '@/types/archiveList';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Pick<archiveListType, 'id'> }) {
  const item = await getItemById(params.id);

  return {
    title: `${item.title}`,
  };
}

const getItemById = async (id: number) => {
  return Promise.resolve(archiveListData[id]);
};

const ArchiveDetail = async ({ params }: { params: Pick<archiveListType, 'id'> }) => {
  const item = await getItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <Title>{item.title}</Title>
      </div>
      <div className={styles.contents}>
        <div>
          <div className={styles.artwork}>
            <Artwork id={item.id} name={item.title} />
            <div className={styles.player}>
              <Player id={item.id} isListen={item.isListen} />
            </div>
          </div>
          <div className={styles.date}>Release Date : {item.releaseDate}</div>
        </div>
        <SongList data={item.trackList} />
      </div>
    </section>
  );
};

export async function generateStaticParams() {
  const books = await Promise.resolve(Object.values(archiveListData));

  return books.map(({ id }) => ({
    id: String(id),
  }));
}

export default ArchiveDetail;
