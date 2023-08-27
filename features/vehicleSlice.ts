import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import IVehicle from "@/models/Vehicle";
import { getHeaders } from "@/helpers/header";

type InitialState = {
  loading: boolean;
  vehicles: IVehicle[];
  biddenVehicles: IVehicle[];
  totalBidding: number;
  viewBiddings: boolean;
  error: string;
};

const http = axios.create({
  baseURL: process.env.apiUrl,
});

const initialState: InitialState = {
  loading: false,
  vehicles: [],
  biddenVehicles: [],
  totalBidding: 0,
  viewBiddings: false,
  error: "",
};

export const getVehicles = createAsyncThunk(
  "vehicle/getVehicles",
  ({ page = 1, vehicleBrand }: { page: number; vehicleBrand: string }) => {
    const brandFilter =
      vehicleBrand !== "All" ? `&details.brand=${vehicleBrand}` : "";

    return http
      .get<IVehicle[]>(`/vehicles?_page=${page}&_limit=5${brandFilter}`,getHeaders()).then((response) => response.data);
  }
);

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    bidVehicle: (state, action: PayloadAction<IVehicle>) => {
      const searchIndex = state.biddenVehicles.findIndex(
        (item) => item.id === action.payload.id
      );
      let total: number = 0;

      if (searchIndex >= 0) {
        state.biddenVehicles[searchIndex].biddingAmount = action.payload.biddingAmount;
      } else {
        action.payload.id &&
          state.biddenVehicles.push({
            ...action.payload,
          });
      }

      state.biddenVehicles.forEach((item) => {
        total = parseInt(total) + parseInt((item.biddingAmount ?? 0));
      });

      state.totalBidding = total;
    },
    viewBidding: (state) => {

      state.viewBiddings = !state.viewBiddings;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVehicles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getVehicles.fulfilled,
      (state, action: PayloadAction<IVehicle[]>) => {
        state.loading = false;
        state.vehicles = action.payload;
        state.error = "";
      }
    );
    builder.addCase(getVehicles.rejected, (state, action) => {
      state.loading = false;
      state.vehicles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default vehicleSlice.reducer;
export const { bidVehicle, viewBidding } = vehicleSlice.actions;
