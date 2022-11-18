const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
};
