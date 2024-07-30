import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: { list: [] },
  reducers: {
    addTestimonial: (state, action) => {
      state.list.push(action.payload);
    },
    updateTestimonial: (state, action) => {
      const index = state.list.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addTestimonial, updateTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
