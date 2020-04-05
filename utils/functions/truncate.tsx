export const truncate = (text: string, splitter: string, count: number): string => (
    text.split(splitter).splice(0, count).join(splitter).concat(splitter)
);