
function date_formating(date) {
  const reg = /\d{2}-\d{2}-\d{4}/;
  const reg2 = /\d{4}-\d{2}-\d{2}/;
  if (reg.test(date)) {
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  } else if (reg2.test(date)) {
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  } else {
    return "تنسيق غير صالح للتاريخ";
  }
}


function isEmail(email) {
  // write your code here
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}


console.log(isEmail("example@com")); // true
