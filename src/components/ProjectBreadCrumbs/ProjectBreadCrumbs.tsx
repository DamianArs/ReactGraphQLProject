import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    margin: '40px 0 40px 30px',
    fontSize: '20px',
    lineHeight: 1.5,
    letterSpacing: '0.09px',
    color: 'rgba(0, 0, 0, 0.54)'
  
  },
 
},
{
  name: 'ProjectBreadCrumbs'
}
)



export const ProjectBreadCrumbs:React.FC = () =>  {

  const classes = useStyles();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="inherit" href="/" onClick={()=>{}}>
        GraphQl Project
      </Link>
      <Link color="inherit" href="/List/" onClick={()=>{}}  aria-current="page">
        List
      </Link>
      <Link
        color="textPrimary"
        href="/list/uuid/"
        onClick={()=>{}}
        aria-current="page"
      >
        UUID
      </Link>
    </Breadcrumbs>
  );
}