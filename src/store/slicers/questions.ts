import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import apiClient from 'src/request';

export interface QuestionItem {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

interface QuestionsState {
  questions: QuestionItem[];
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk<QuestionItem[], void, { rejectValue: string }>(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<QuestionItem[]>('/getQuestions');
      return response.data;
    } catch (err) {
      const error = err as AxiosError | Error;
      let errorMessage = 'Failed to fetch questions';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<QuestionItem[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export default questionsSlice.reducer;
