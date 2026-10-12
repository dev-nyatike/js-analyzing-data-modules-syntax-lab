



function combineUsers(...userArrays) {
  const users = userArrays.flat();
  const merge_date = Date.today().toString("M/d/yyyy");

  return {
    users: users,
    merge_date: merge_date
  };
}

module.exports = {
  combineUsers
};