import styles from './page.module.scss';
import { biliClient } from '@/lib/client';
import PageTitle from '@/components/PageTitle';
import { PartItem } from './PartItem';
import { string2Number } from '@/utils';
import { OperateBlock } from './Operate';

export default async function PartList({
  searchParams: { aid, bvid },
}: {
  searchParams: { aid: string; bvid: string };
}) {
  const { data } = await biliClient.getVideoDetail({ aid: string2Number(aid), bvid: bvid });

  return (
    <>
      <PageTitle>{data.title}</PageTitle>
      <OperateBlock data={data} />
      <div className={styles.partList}>
        {data.pages.map((item) => {
          return (
            <PartItem
              key={item.cid}
              data={item}
              aid={string2Number(aid)}
              bvid={bvid}
            />
          );
        })}
      </div>
    </>
  );
}
