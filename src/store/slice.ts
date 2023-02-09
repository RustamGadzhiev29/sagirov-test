/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import DataApi from "../api/api";

import { AppRootStateType, TypedDispatch } from "./store";
import { DataType } from "./types";

const initialState: Array<DataType> = [
  {
    value: null,
    description: null,
  },
];

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    GetData(state, action: PayloadAction<{ data: Array<DataType> }>) {
      return (state = action.payload.data);
    },
  },
});

export const dataReducer = slice.reducer;
export const { GetData } = slice.actions;
export const action = GetData.type;

export const setDataTC = () => {
  return (dispatch: TypedDispatch<AppRootStateType>) => {
    DataApi.getData().then((res) => {
      dispatch(GetData({ data: res.data }));
    });
  };
};
