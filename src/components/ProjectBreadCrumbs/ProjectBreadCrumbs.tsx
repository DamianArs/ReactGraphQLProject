import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { BreadCrumbsProps } from '../../Types'

const useStyles = makeStyles({
  root:{
    margin: '40px 0 40px ',
    fontSize: '20px',
  },
  text:{
    fontSize: '20px',
 
  },
  breadcrumbDiv:{
    margin: '0 32px',
    display: 'flex',
    justifyContent: 'space-between'
  }
},
{
  name: 'ProjectBreadCrumbs'
}
)


const ProjectBreadCrumbs = (props: BreadCrumbsProps) => {
  const classes = useStyles();
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter((x: string ) => x);

  const handleBack = () => {
    if(pathnames.length === 1){
      history.push('/')
    }
    else {
       history.push(`/${pathnames[pathnames.length - 2]}`)
    }
  }
  return (
    <div className={classes.breadcrumbDiv}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
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
      {pathnames.length > 0 &&
        <div style={{display: 'flex', alignItems: 'center'}} onClick={handleBack}>
          <ArrowBackIosIcon style={{fontSize: '14px', color: '#3f51b5'}}/>
          <Button color="primary">Back</Button>
        </div>
      }
    </div>
  );
};

export default withRouter(ProjectBreadCrumbs);
