export declare class Storage {
    user: {
        username: string;
        avatarUrl: string;
    };
    favouritesAmount: number;
    constructor(username: string, avatarUrl: string, favouritesAmount?: number);
}
export declare const localStorage: Storage;
