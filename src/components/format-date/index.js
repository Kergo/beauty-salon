export const formatDate = timestamp => {
  let myDate = timestamp.toDate().getDate();
  let myMonth = timestamp.toDate().getMonth();
  let myYear = timestamp.toDate().getFullYear();
  let formated = `${myDate}-${myMonth}-${myYear}`;
  return formated;
};

export const formatTime = timestamp => {
  let myHours = timestamp.toDate().getHours();
  let myMinutes = timestamp.toDate().getMinutes();
  if (myMinutes === 0) myMinutes = `${myMinutes}0`;
  let formated = `${myHours}:${myMinutes}`;
  return formated;
};