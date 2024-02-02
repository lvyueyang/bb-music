'use client';
import styles from './index.module.scss';
import { cls, transformImgUrl } from '@/utils';
import { SearchResultItem } from '@/types';
import { queryVideoDetailApi } from '@/apis';
import { useRequest } from 'ahooks';
import { useRouter } from 'next/navigation';
import qs from 'querystring';
import { useState } from 'react';

export default function SearchItem({ data }: { data: SearchResultItem }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { loading, run: getDetailHandler } = useRequest(
    () => {
      console.log(data);
      return queryVideoDetailApi({
        aid: data.aid,
        bvid: data.bvid,
      }).then((res) => {
        const info = res.data.data;
        if (info.videos > 1) {
          router.push(`/parts?${qs.stringify({ aid: info.aid, bvid: info.bvid })}`);
        } else {
          setShow(true);
        }
        return res.data.data;
      });
    },
    { manual: true }
  );

  return (
    <div
      className={styles.searchItem}
      onClick={getDetailHandler}
    >
      <img
        className={styles.cover}
        src={transformImgUrl(data.pic)}
        alt=''
      />
      <div className={styles.info}>
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <div className={styles.tags}>
          <span>发布者：{data.author}</span>
          <span>时长：{data.duration}</span>
        </div>
      </div>
      {loading && <div className={styles.loading}>加载中...</div>}
      <div className={cls(styles.operate, show ? styles.show : '')}>
        <span>立即播放</span>
        <span>加入歌单</span>
        <span>添加至播放列表</span>
      </div>
    </div>
  );
}
