  

import { createSlice } from '@reduxjs/toolkit';

const translations= createSlice({
  name: 'Intl',
  initialState: {
    locale:'vi'
  },
  reducers: {
    changeLanguageReducer: (state, action) => {
      state.locale = action.payload
    },
  }
});

const { reducer, actions } = translations
export const {
  changeLanguageReducer
} = actions;
export const changeLanguage = (param) => async dispatch => {
    dispatch(changeLanguageReducer(param));
}
export default reducer;
