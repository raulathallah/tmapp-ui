import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const fetchPrio = createAsyncThunk(
  "prio/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/priority`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatePriorityTask = createAsyncThunk(
  "prio/updateTask",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(
        `/task/update-priority/${id}`,
        data
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "prio",
  initialState: { items: [], status: "idle", error: null },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.isUpdated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPrio.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPrio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updatePriorityTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePriorityTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isUpdated = 1;
        //state.items = action.payload;
      })
      .addCase(updatePriorityTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = taskSlice.actions;
export default taskSlice.reducer;
