export declare function renderUserBlock(username: string, pathToAvatar: string, favoriteItemsAmount?: number): void;
export declare function getUserData(storage: unknown): {
    username: string;
    avatarUrl: string;
};
export declare function getFavouritesAmount(storage: unknown): number;
