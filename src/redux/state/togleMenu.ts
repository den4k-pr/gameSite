"use client"

import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isVisible: boolean;
}

const initialState: MenuState = {
  isVisible: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleVisibility: state => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleVisibility } = menuSlice.actions;

export default menuSlice.reducer;
