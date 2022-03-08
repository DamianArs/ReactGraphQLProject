import React, { useMemo } from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { BreadCrumbsProps } from "../../Types";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useState } from "react";
import { addBreadCrumb } from "../../Store/actions";

const useStyles = makeStyles(
  {
    root: {
      margin: "40px 0 40px ",
      fontSize: "20px",
    },
    text: {
      fontSize: "20px",
    },
    breadcrumbDiv: {
      margin: "0 32px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  {
    name: "ProjectBreadCrumbs",
  }
);

const ProjectBreadCrumbs = (props: BreadCrumbsProps) => {
  const [pathnamesBreadcrumb, setPathnamesBreadrumb] = React.useState<any>([]);
  const dispatch = useDispatch();
  const BreadCrumbs = useSelector(
    (state: any) => state.customersReducer.breadcrumbPath
  );

  const classes = useStyles();
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x: string) => x);

  const handleBack = useCallback(() => {
    console.log("IIII", pathnamesBreadcrumb.length);
    pathnamesBreadcrumb.length = pathnamesBreadcrumb.length - 1;
    setPathnamesBreadrumb(pathnamesBreadcrumb);
  }, [BreadCrumbs, setPathnamesBreadrumb, pathnamesBreadcrumb.length]);

  const backButton = useMemo(() => {
    console.log("AAAA", pathnamesBreadcrumb.length);

    return pathnamesBreadcrumb.length > 1 ? (
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={handleBack}
      >
        <ArrowBackIosIcon style={{ fontSize: "14px", color: "#3f51b5" }} />
        <Button color="primary">Back</Button>
      </div>
    ) : null;
  }, [pathnamesBreadcrumb.length]);
  React.useEffect(() => {
    setPathnamesBreadrumb([...pathnames, ...BreadCrumbs]);
  }, [BreadCrumbs, setPathnamesBreadrumb, pathnamesBreadcrumb.length]);

  return (
    <div className={classes.breadcrumbDiv} id="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
        <Link
          className={classes.text}
          onClick={() => history.push("/")}
          color="textPrimary"
        >
          GraphQL Project
        </Link>

        {/* {pathnames.map((name: string, index: number) => {
          const routeTo = `/${state.join("/")}`;

          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Link className={classes.text} key={name}>
              {name + " / " + BreadCrumbs.join(" / ")}
            </Link>
          ) : (
            <Link
              key={name}
              onClick={() => history.push(routeTo)}
              color="textPrimary"
              className={classes.text}
            ></Link>
          );
        })} */}
      </Breadcrumbs>
      {backButton}
    </div>
  );
};

export default React.memo(withRouter(ProjectBreadCrumbs));
