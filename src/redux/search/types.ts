export interface ISearchState extends ISearch {
  isLoading: boolean;
  currentPage: number;
  count: number;
  total: number;
  searchValue: string;
  searchListValue:string;
  searchLetter:string;
  isWordsListLoading: boolean;
  wordsList: ISearchData[];
  popularList: ISearchData[];
  isPopularListLoading:boolean;
  categories:ICategoriesData[];
}

export interface ISearch {
  message?: string;
  data: ISearchData[];
  total: number;
}

export interface ISearchData {
  id: number;
  latin: string;
  kiril: string;
}

export interface ICategories {
  message: string;
  data:    ICategoriesData[];
}

export interface ICategoriesData {
  id:          number;
  latin:       string;
  kiril:       string;
  words_total: number;
}
