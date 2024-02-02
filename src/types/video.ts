export interface QueryVideoDetailParams {
  /** 稿件 bvid 任选一个*/
  bvid?: string;
  /** 稿件 aid 任选一个*/
  aid?: number;
}
export interface QueryVideoUrlParams extends QueryVideoDetailParams {
  /** 若视频有分P，仅为单P视频的 url，换P则需传参对应 CID 重新获取 */
  cid: number;
}

export interface VideoDetailResponse {
  bvid: string;
  aid: number;
  /** 稿件分P总数 */
  videos: number;
  tid: number;
  tname: string;
  copyright: number;
  pic: string;
  title: string;
  pubdate: number;
  ctime: number;
  desc: string;
  desc_v2: Descv2[];
  state: number;
  duration: number;
  rights: Rights;
  owner: Owner;
  stat: Stat;
  argue_info: Argueinfo;
  dynamic: string;
  cid: number;
  dimension: Dimension;
  premiere?: any;
  teenage_mode: number;
  is_chargeable_season: boolean;
  is_story: boolean;
  is_upower_exclusive: boolean;
  is_upower_play: boolean;
  is_upower_preview: boolean;
  enable_vt: number;
  vt_display: string;
  no_cache: boolean;
  /** 视频分P列表 */
  pages: VideoDetailPage[];
  subtitle: Subtitle;
  is_season_display: boolean;
  user_garb: Usergarb;
  honor_reply: Honorreply;
  like_icon: string;
  need_jump_bv: boolean;
  disable_show_up_info: boolean;
  is_story_play: number;
}

interface Honorreply {}

interface Usergarb {
  url_image_ani_cut: string;
}

interface Subtitle {
  allow_submit: boolean;
  list: any[];
}

export interface VideoDetailPage {
  cid: number;
  page: number;
  from: string;
  part: string;
  duration: number;
  vid: string;
  weblink: string;
  dimension: Dimension;
  first_frame: string;
}

interface Dimension {
  width: number;
  height: number;
  rotate: number;
}

interface Argueinfo {
  argue_msg: string;
  argue_type: number;
  argue_link: string;
}

interface Stat {
  aid: number;
  view: number;
  danmaku: number;
  reply: number;
  favorite: number;
  coin: number;
  share: number;
  now_rank: number;
  his_rank: number;
  like: number;
  dislike: number;
  evaluation: string;
  vt: number;
}

interface Owner {
  mid: number;
  name: string;
  face: string;
}

interface Rights {
  bp: number;
  elec: number;
  download: number;
  movie: number;
  pay: number;
  hd5: number;
  no_reprint: number;
  autoplay: number;
  ugc_pay: number;
  is_cooperation: number;
  ugc_pay_preview: number;
  no_background: number;
  clean_mode: number;
  is_stein_gate: number;
  is_360: number;
  no_share: number;
  arc_pay: number;
  free_watch: number;
}

interface Descv2 {
  raw_text: string;
  type: number;
  biz_id: number;
}

export interface VideoUrlResponse {
  from: string;
  result: string;
  message: string;
  quality: number;
  format: string;
  timelength: number;
  accept_format: string;
  accept_description: string[];
  accept_quality: number[];
  video_codecid: number;
  seek_param: string;
  seek_type: string;
  durl: Durl[];
  support_formats: Supportformat[];
  high_format?: any;
  last_play_time: number;
  last_play_cid: number;
}

interface Supportformat {
  quality: number;
  format: string;
  new_description: string;
  display_desc: string;
  superscript: string;
  codecs?: any;
}

interface Durl {
  order: number;
  length: number;
  size: number;
  ahead: string;
  vhead: string;
  url: string;
  backup_url: string[];
}
