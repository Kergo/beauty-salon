const formatDate = timestamp => {
  let myDate = timestamp.toDate().getDate();
  let myMonth = timestamp.toDate().getMonth();
  let myYear = timestamp.toDate().getFullYear();
  let formated = `${myDate}-${myMonth}-${myYear}`;
  return formated;
};

export default formatDate;
