export const timeToRead = (count: number) => {
  const minutes = Math.ceil(count / 200);

  return `${minutes}min`;
};
