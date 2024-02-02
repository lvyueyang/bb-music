'use client';
import { VideoDetailPage, VideoDetailResponse } from '@/types';
import styles from './page.module.scss';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { partItem2MusicItem, usePlayerStore } from '@/player';

dayjs.extend(duration);

export function OperateBlock({ data }: { data: VideoDetailResponse }) {
  const player = usePlayerStore();
  return (
    <div className={styles.allOperate}>
      <span
        title='将会替换播放列表'
        onClick={() => {
          player.clearPlayerList();
          console.log(data.pages);
          player.addPlayerList(
            data.pages.map((item) =>
              partItem2MusicItem({ ...item, aid: data.aid, bvid: data.bvid })
            )
          );
          player.play(player.playerList[0]);
        }}
      >
        播放
      </span>
      <span>加入歌单</span>
      <span
        onClick={() => {
          player.addPlayerList(
            data.pages.map((item) =>
              partItem2MusicItem({ ...item, aid: data.aid, bvid: data.bvid })
            )
          );
        }}
      >
        添加至播放列表
      </span>
    </div>
  );
}
