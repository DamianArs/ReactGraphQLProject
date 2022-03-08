import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import qs from "qs";
import { useHistory } from "react-router";
import { Paper, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "0 30px",
    },

    line: {
      margin: "0 30px 40px 30px",
      height: "1px",
      background: "gray",
    },
    boxComponent: {
      display: "flex",
      flexDirection: "column",
    },
    paperComponent: {
      display: "flex",
      justifyContent: "space-around",
    },
    paperTitle: {
      textAlign: "center",
      padding: "10px",
      marginBottom: "20px",
    },
  },
  {
    name: "DisplayComponent",
  }
);

export const DisplayComponent: React.FC = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const query = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  });
  const { uuid, name, country, email, phone } = query;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperTitle}>
        <Typography variant="h4" color="textSecondary">
          {name}
        </Typography>
      </Paper>
      <Paper className={classes.paperComponent}>
        <Box m={8} className={classes.boxComponent}>
          <div style={{ marginBottom: "30px" }}>
            <Typography variant="h5">UUID</Typography>
            <Typography variant="h6" color="textSecondary" data-uuid>
              {uuid}
            </Typography>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <Typography variant="h5">Country</Typography>
            <Typography variant="h6" color="textSecondary">
              {country}
            </Typography>
          </div>
        </Box>
        <Box m={8} className={classes.boxComponent}>
          <div style={{ marginBottom: "30px" }}>
            <Typography variant="h5">Email</Typography>
            <Typography variant="h6" color="textSecondary">
              {email}
            </Typography>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <Typography variant="h5">Phone Number</Typography>
            <Typography variant="h6" color="textSecondary">
              {phone}
            </Typography>
          </div>
        </Box>
      </Paper>
    </div>
  );
};
