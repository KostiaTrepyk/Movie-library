export interface BaseInfoResponse {
    page: number;
    next: string;
    entries: number;
    results: BaseInfoResultEntity[];
}
export interface BaseInfoResultEntity {
    _id: string;
    id: string;
    ratingsSummary: null | {
        aggregateRating: null;
        voteCount: number;
        __typename: string;
    };
    episodes: null | {} /* !!! */;
    primaryImage: null | {
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
    releaseDate: null | {
        day: number;
        month: number;
        year: number;
    };
    releaseYear: null | {
        year: number;
        endTear: number | null;
    };
    runtime: {
        seconds: number;
    };
    series: null;
    meterRanking: null;
    plot: {
        plotText: {
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
