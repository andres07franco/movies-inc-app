export interface PaginationResultsDto<T> {
  page: number;
  resutls: T;
  totalPages: number;
  totalResults: number;
}
