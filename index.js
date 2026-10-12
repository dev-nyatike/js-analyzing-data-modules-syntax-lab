




require('datejs');

function combineUsers(...userArrays) {
  const users = userArrays.flat();
  const merge_date = Date.today().toString("M/d/yyyy");

  return {
    users,
    merge_date
  };
}

module.exports = {
  combineUsers
};