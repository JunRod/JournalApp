import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css"
import { startDeletingNotes, startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal";
import SaveOutlined from "@mui/icons-material/SaveOutlined";
import IconButton from "@mui/material/IconButton/IconButton";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import UploadOutlined from "@mui/icons-material/UploadOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

export const NoteView = () => {

  const dispatch = useDispatch()
  const fileInputRef = useRef()

  const { active: note, isSaving, messageSaved } = useSelector((state) => state.journal)
  const { onInputChange, formState, title, body, date } = useForm(note)

  const dateString = useMemo(() => new Date(date).toUTCString(), [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire(messageSaved, "", "success")
    }
  }, [messageSaved])

  const onSavedNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) => {
    if(target.files === 0) return

    dispatch(startUploadingFiles(target.files)) 
  }

  const onDelete = () => {
    dispatch(startDeletingNotes())
  }

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input type="file" multiple onChange={onFileInputChange} ref={fileInputRef} style={{display: "none"}}/>

        <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()}>
          <UploadOutlined/>
        </IconButton>

        <Button color="primary" sx={{ padding: 2 }} onClick={onSavedNote} disabled={isSaving}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedió hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button
          onClick={onDelete}
          sx={{mt: 2}}
          color= "error"
        >
          <DeleteOutline/>
          Borrar
        </Button>
      </Grid>

      <ImageGallery images={note.imageURL}/>
    </Grid>
  );
};
