export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefresh = (state) => state.auth.isRefresh;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectIsEror = (state) => state.auth.isError;