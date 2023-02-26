import { Dayjs } from "dayjs";

export interface IAdminState {
    categories:ICategoryByDateData[];
    categoriesCount:number;
    lang:boolean;
}

export interface ICategoryByDate {
    message: string;
    data:    ICategoryByDateData[];
    total:   number;
}

export interface ICategoryByDateData {
    id:         number;
    latin:      string;
    kiril:      string;
    created_at: Date | string | Dayjs;
}
