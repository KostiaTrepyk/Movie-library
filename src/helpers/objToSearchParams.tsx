export function objToSearchParams(obj: Record<string, string | number>): string {
    let query: string = "?";

    for (const name in obj) {
        if (obj[name]) {
            query += `${name}=${obj[name]}&`;
        }
    }
    query = query.slice(0, query.length - 1);

    return query;
}
