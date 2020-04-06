export const truncate = (text: string, count: number): string | undefined => {
    const matches = text.match(/([a-zA-Z ,'-]*[.?!\n])/gm)
    return matches?.slice(0, count).join('  ');
}