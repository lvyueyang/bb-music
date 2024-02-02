import { clientRequest } from '@/lib/request';
import { QueryVideoDetailParams, VideoDetailResponse } from '@/types';
import { Result } from '@/types/common';

/** 视频详情 */
export function queryVideoDetailApi(params: QueryVideoDetailParams) {
  return clientRequest.get<Result<VideoDetailResponse>>('/api/video/detail', { params });
}
