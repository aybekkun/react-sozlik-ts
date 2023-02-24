export interface ISearchProps {
  id?: number | string;
  search?: string;
  letter?: string;
  limit?: number;
  page?: number;
  name?: string;
  signal?: AbortSignal;
  sortBy?: "kiril" | "latin" | "count" | "date";
}
