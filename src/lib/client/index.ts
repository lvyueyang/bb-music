import dayjs from 'dayjs';
import { encWbi, getWbiKeys } from './utils';
import { request } from '../request';
import {
  QueryVideoDetailParams,
  QueryVideoUrlParams,
  SearchParams,
  SearchResponse,
  VideoDetailResponse,
  VideoUrlResponse,
} from '@/types';
import { Result } from '@/types/common';
class Client {
  signData = {
    img_key: '',
    sub_key: '',
  };
  constructor() {}

  /** 初始化 */
  init() {
    this.initSign();
  }

  async initSign() {
    this.signData = await getWbiKeys();
    return this.signData;
  }
  async validateSign() {
    if (!this.signData.img_key) {
      return await this.initSign();
    } else {
      return this.signData;
    }
  }
  sign(opt: Record<string, any>) {
    const params = { ...opt, wts: dayjs().unix() };
    const { img_key, sub_key } = this.signData;
    const query = encWbi(params, img_key, sub_key);
    return query;
  }

  /** 搜索 */
  async search({ keyword, page = 1 }: SearchParams) {
    await this.validateSign();
    if (!keyword || page < 1) {
      return void 0;
    }
    const params = {
      search_type: 'video',
      keyword,
      page,
    };
    const query = this.sign(params);
    const res = await request.get<Result<SearchResponse>>(
      `https://api.bilibili.com/x/web-interface/wbi/search/type?${query}`
    );
    return res.data.data;
  }

  /** 视频详情 */
  async getVideoDetail({ bvid, aid }: QueryVideoDetailParams) {
    // 先获取视频详情
    const { data: info } = await request.get<Result<VideoDetailResponse>>(
      `https://api.bilibili.com/x/web-interface/view`,
      {
        params: {
          bvid,
          aid,
        },
      }
    );
    return info;
  }

  /** 获取播放地址 */
  async getVideoUrl({ bvid, aid, cid }: QueryVideoUrlParams) {
    await this.validateSign();
    const res = await request.get<Result<VideoUrlResponse>>(
      `https://api.bilibili.com/x/player/wbi/playurl?${this.sign({
        bvid,
        avid: aid,
        cid,
      })}`
    );
    return res.data;
  }
}

export const biliClient = new Client();
