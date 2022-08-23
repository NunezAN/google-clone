import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    emailCount: 0,
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    setEmailCount: (state,action) =>{
      state.emailCount = action.payload;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {setEmailCount, selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectEmailCount = (state) => state.mail.emailCount;

export default mailSlice.reducer;
