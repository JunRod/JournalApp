import { useSelector } from "react-redux";
import Box from "@mui/material/Box/Box";
import Drawer from "@mui/material/Drawer/Drawer";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import List from "@mui/material/List/List";
import Divider from "@mui/material/Divider/Divider";
import { SideBarItem } from "./SideBarItem";

export const SiderBar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector(state => state.journal)

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note}/>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
