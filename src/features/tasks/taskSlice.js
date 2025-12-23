import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const fetchTasks = createAsyncThunk(
  "task/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/task`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTaskDetail = createAsyncThunk(
  "task/fetchDetail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/task/${id}`);

      console.log(response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { items: [], status: "idle", error: null },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTaskDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTaskDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload;
      })
      .addCase(fetchTaskDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = taskSlice.actions;
export default taskSlice.reducer;
