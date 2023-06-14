import { useMemo } from "react";
import { useDispatch } from "react-redux";
import TurnedInNot from "@mui/icons-material/TurnedInNot";
import Grid from "@mui/material/Grid/Grid";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title, body, date, imageURL = [], id}) => {

    const newTitle = useMemo(() => title.length > 17 ? title.substring(0, 17) + "..." : title, [title])

    const dispatch = useDispatch()

    const setActiveNoteFunction = () => {
        dispatch(setActiveNote({title, body, date, imageURL, id}))
    }

    return (
        <ListItem disablePadding >
            <ListItemButton onClick={() => setActiveNoteFunction()}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} sx={{minWidth: "200px"}}/>
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
