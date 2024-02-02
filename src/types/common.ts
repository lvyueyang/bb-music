export interface PaginationResponse {
  /** 当前页码 */
  page: number;
  /** 每页条数（固定20） */
  pagesize: number;
  /** 总条数	 */
  numResults: number;
  /** 总计分页数 */
  numPages: number;
}

export interface CostTime {}

export interface Result<T> {
  /** 状态码 0:成功 -400：请求错误 -412：请求被拦截*/
  code: number;
  message: string;
  ttl: number;
  /** 信息本体 */
  data: T;
}

interface Costtime {
  total: string;
  fetch_lexicon: string;
  params_check: string;
  is_risk_query: string;
  illegal_handler: string;
  main_handler: string;
  as_request_format: string;
  as_request: string;
  deserialize_response: string;
  as_response_format: string;
}
