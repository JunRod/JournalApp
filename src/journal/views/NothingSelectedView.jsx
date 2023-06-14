import StarOutline from "@mui/icons-material/StarOutline";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", padding: 4, borderRadius: 5 }}
    >
      <Grid item xs={10}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={10}>
        <Typography color="white" variant="h5">
          Selecciona o crea una cuenta
        </Typography>
      </Grid>
    </Grid>
  );
};
