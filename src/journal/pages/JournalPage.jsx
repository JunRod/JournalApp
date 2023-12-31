import AddOutlined from "@mui/icons-material/AddOutlined";
import IconButton from "@mui/material/IconButton/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";
import { NoteView } from "../views";

export const JournalPage = () => {

  const { isSaving, active } = useSelector((state) => state.journal)
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  );
};
