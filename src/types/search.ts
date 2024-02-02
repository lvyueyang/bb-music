import { PaginationResponse } from './common';

/** 搜索 */
export interface SearchParams {
  keyword: string;
  page?: number;
}

/** 搜索结果 */
export interface SearchResponse extends PaginationResponse {
  /** 搜索seid */
  seid: number;
  /** 副分页信息只在搜索类型为直播间及主播有效 */
  pageinfo: any;
  result: SearchResultItem[];
}

export interface SearchResultItem {
  type: string;
  id: number;
  author: string;
  mid: number;
  typeid: string;
  typename: string;
  arcurl: string;
  aid: number;
  bvid: string;
  title: string;
  description: string;
  arcrank: string;
  pic: string;
  play: number;
  video_review: number;
  favorites: number;
  tag: string;
  review: number;
  pubdate: number;
  senddate: number;
  duration: string;
  badgepay: boolean;
  hit_columns?: string[];
  view_type: string;
  is_pay: number;
  is_union_video: number;
  rec_tags?: any;
  new_rec_tags?: any[];
  rank_score: number;
  like: number;
  upic: string;
  corner: string;
  cover: string;
  desc: string;
  url: string;
  rec_reason: string;
  danmaku: number;
  biz_data?: any;
  is_charge_video: number;
  vt: number;
  enable_vt: number;
  vt_display: string;
  subtitle: string;
  episode_count_text: string;
  release_status: number;
  is_intervene: number;
}
