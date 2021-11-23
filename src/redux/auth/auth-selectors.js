const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUSerName = state => state.auth.user.name;
const authSelectors = {
  getIsLoggedIn,
  getUSerName,
};
export default authSelectors;
