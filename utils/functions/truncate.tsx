export const truncate = (text: string, count: number): string => {
    if (!text) return text;

    const matches = text.match(/([a-zA-Z ,'-)(]*[.?!\n])/gm);
    
    if (matches != null) {
        return matches.slice(0, count).join('  ');
    } else {
        return text;
    }
}