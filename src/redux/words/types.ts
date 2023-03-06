export interface IWordsState extends IWords {
  isLoading: boolean;
  currentPage: number;
  count: number;
  total: number;
  selectedWord: IWordData;
  wordsDay : IWordData;
  isWordLoading: boolean;
  wordsCount: number;
  
}

export interface IWords {
  message?: string;
  data: IWordData[];
  total: number;
}

export interface IWord {
  message: string;
  data: IWordData;
}

export interface IWordData {
  id: number;
  latin: string;
  kiril: string;
  description_latin: string;
  description_kiril: string;
  count: string;
  audio: null | string;
  categories: ICategory[];
  synonyms: any[];
  antonyms: any[];
  created_at: Date | string;
}

export interface ICategory {
  id: number;
  latin: string;
  kiril: string;
}
