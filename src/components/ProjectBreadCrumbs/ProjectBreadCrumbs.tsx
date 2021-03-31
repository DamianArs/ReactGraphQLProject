import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
  },
  separator: {
    margin: '40px 0 40px 32px',
    fontSize: '20px',
  },
  text:{
    fontSize: '20px',
    margin: '0 10px'
  }
  
},
{
  name: 'ProjectBreadCrumbs'
}
)

const ProjectBreadCrumbs = (props:any) => {
  const classes = useStyles();
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter((x:any) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.separator}>
      {pathnames.length > 0 ? (
        <Link className={classes.text} onClick={() => history.push("/")} color='textPrimary'>GraphQL Project</Link>
      ) : (
        <Typography className={classes.text}>GraphQL Project</Typography>
      )}
      {pathnames.map((name:string, index: number) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography className={classes.text} key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)} color='textPrimary' className={classes.text}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(ProjectBreadCrumbs);
