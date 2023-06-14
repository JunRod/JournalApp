import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    creatingNewNote: (state, action) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state, action) => {
      state.isSaving = false;
      state.messageSaved = "";
    },
    updateNote: (state, { payload: noteUpdate }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === noteUpdate.id ? noteUpdate : note
      );
      state.messageSaved = `Nota: ${noteUpdate.title} Actualizada`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageURL = [...state.active.imageURL, ...action.payload];
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, {payload:idNoteDelete}) => {
      state.notes = state.notes.filter(note => note.id !== idNoteDelete)
      state.active = null
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNoteById,
  setActiveNote,
  setNotes,
  setSaving,
  creatingNewNote,
  updateNote,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions;
