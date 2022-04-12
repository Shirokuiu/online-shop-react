import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';

const initialState = {};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {},
});

export const {} = mainPageProcess.actions;
