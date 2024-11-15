export type Comment = {
    id: number;
    text: string;
    filmId: number;
    author: {
        username: string;
        id: number;
    };
};
