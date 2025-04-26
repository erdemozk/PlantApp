import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, isAxiosError } from 'axios';
import request from 'src/request';

interface Image {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryItem {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: Image;
}

interface ApiResponse {
  data: CategoryItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface CategoriesState {
  categories: CategoryItem[];
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<CategoryItem[], void, { rejectValue: string }>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await request.get<ApiResponse>('/getCategories');
      return response.data.data;
    } catch (err) {
      const error = err as AxiosError | Error;
      let errorMessage = 'Failed to fetch categories';
      if (isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<CategoryItem[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export default categoriesSlice.reducer;
