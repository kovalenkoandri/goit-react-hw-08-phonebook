export const selectItems = state => state.contactsSlice.items;

export const selectFilter = state => state.filterSlice.filter;

export const selectLoading = state => state.contactsSlice.isLoading;

export const selectError = state => state.contactsSlice.error;
