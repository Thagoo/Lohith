import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { setFieldValue, resetForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
