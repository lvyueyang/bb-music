import { biliClient } from '@/lib/client';
import SearchForm from '@/components/SearchForm';
import styles from './page.module.scss';
import SearchItem from '@/components/SearchItem';

const hideTypes = ['ketang'];

export default async function Search({
  searchParams: { keyword, page = '1' },
}: {
  searchParams: {
    keyword: string;
    page: string;
  };
}) {
  const data = await biliClient.search({
    keyword: keyword || '',
    page: Number(page),
  });

  return (
    <>
      <SearchForm />
      <div className={styles.searchList}>
        {data?.result.map((item) => {
          if (hideTypes.includes(item.type)) return null;
          return (
            <SearchItem
              data={item}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
}
