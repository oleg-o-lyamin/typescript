interface SearchFormData {
    city: string;
    checkin: Date;
    checkout: Date;
    maxPrice: number;
}
export interface Place {
}
interface SearchCallback {
    (error?: Error, places?: Place[]): void;
}
export declare function search(searchData: SearchFormData, callback: SearchCallback): void;
export declare function renderSearchFormBlock(checkin?: Date, checkout?: Date): void;
export {};
