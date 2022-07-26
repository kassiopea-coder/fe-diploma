export function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
export const secToDate = (sec) =>
  new Date(sec * 1000).toISOString().substring(0, 10);
export const secToDateTime = (sec) =>
  new Date(sec * 1000).toISOString().substring(11, 16);

export const sec2hhmm = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const hh = hours > 9 ? hours : `0${hours}`;
  const mm = minutes > 9 ? minutes : `0${minutes}`;
  return {
    hh: `${hh}`,
    mm: `${mm}`,
    hours: `${hours} ${declOfNum(hours, ["час", "часа", "часов"])}`,
    minutes: `${minutes} ${declOfNum(minutes, ["минута", "минуты", "минут"])}`,
  };
};
