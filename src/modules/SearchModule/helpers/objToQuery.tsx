export function objToQuery(obj: Record<string, string | number>): string {
    const query = "?" + new URLSearchParams(obj as any).toString();
    return query;
}
