import React from "react";

import { TextField, Button, Grid, MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#008512"
      },
      secondary: {
        main: "#FFFFFF"
      },
      text: {
        primary: "rgba(0,0,0,1)",
        secondary: "rgba(0,0,0,0.6)"
      }
    }
  });

export default function Details() {
    
  return (
    <MuiThemeProvider theme={theme}>
    <div className="container center">
      <Grid container justify={"center"} alignItems={"center"} spacing={1}>
        <Grid item xs={12}>
          <h3>Game Electronics</h3>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="Name"
            value={"Material-UI Text field"}
            onChange={() => console.log("I was changed")}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
    </MuiThemeProvider>
  );
}

