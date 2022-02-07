//jshint esversion:6
exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  };
  return today.toLocaleDateString("en-us", options);
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  return today.toLocaleDateString("en-us", options);
};
// console.log(module.exports);
