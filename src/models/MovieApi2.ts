export interface BaseInfoResponse {
    page: number;
    next: string;
    entries: number;
    results: BaseInfoResultEntity[];
}
export interface BaseInfoResultEntity {
    _id: string;
    id: string;
    ratingsSummary?: {
        aggregateRating: null;
        voteCount: number;
        __typename: string;
    };
    episodes?: {} /* !!! */;
    primaryImage?: {
        id: string;
        width: number;
        height: number;
        url: string;
        caption: {
            plainText: string;
        };
    };
    titleType: {
        text: string;
        id: string;
        isSeries: boolean;
        isEpisode: boolean;
        canHaveEpisodes: boolean;
    };
    genres: {
        genres: {
            text: string;
            id: string;
        }[];
    };
    titleText: {
        text: string;
    };
    originalTitleText: {
        text: string;
    };
    releaseDate?: {
        day: number;
        month: number;
        year: number;
    };
    releaseYear?: {
        year: number;
        endTear?: number;
    };
    runtime: {
        seconds: number;
    };
    series: null;
    meterRanking: null;
    plot: {
        plotText?: {
            plainText: string;
        };
        language: {
            id: string;
        };
    };
}

export interface AllGenresResponse {
    results: string[];
}
