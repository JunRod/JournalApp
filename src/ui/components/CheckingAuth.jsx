import Grid from "@mui/material/Grid/Grid";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
        <Grid container direction="row" justifyContent="center">
            <CircularProgress color="warning"/>
        </Grid>
    </Grid>
  );
};
