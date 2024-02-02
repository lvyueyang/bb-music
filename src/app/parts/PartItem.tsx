'use client';
import { VideoDetailPage } from '@/types';
import styles from './page.module.scss';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { partItem2MusicItem, usePlayerStore } from '@/player';

dayjs.extend(duration);

export function PartItem({
  data,
  aid,
  bvid,
}: {
  data: VideoDetailPage;
  aid: number;
  bvid: string;
}) {
  const player = usePlayerStore();
  return (
    <div className={styles.partItem}>
      <div>
        <span>
          {data.page}. {data.part}
        </span>
      </div>
      <span className={styles.duration}>
        时长: {dayjs.duration(data.duration, 'seconds').format('mm:ss')}
      </span>
      <div className={styles.operate}>
        <span
          onClick={(e) => {
            e.stopPropagation();
            player.play(partItem2MusicItem({ ...data, aid, bvid }));
          }}
        >
          立即播放
        </span>
        <span>加入歌单</span>
        <span
          onClick={() => {
            player.addPlayerList([partItem2MusicItem({ ...data, aid, bvid })]);
          }}
        >
          添加至播放列表
        </span>
      </div>
    </div>
  );
}
