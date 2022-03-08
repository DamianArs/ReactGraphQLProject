import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "10px 0",
      background: "#ffffff",
    },
  },
  {
    name: "ListPagination",
  }
);

interface ListPaginationProps {
  rowsPerPageOptions?: number[];
  page: number;
  perPage: number;
  total: number;
  onChangePage: (page: number) => void;
  onChangePerPage: (perPage: number) => void;
}

export const PaginationComponent: React.FC<ListPaginationProps> = (props) => {
  const { page, perPage, total, rowsPerPageOptions = [5, 10, total] } = props;
  const classes = useStyles();

  const defaultPage = React.useMemo(() => page, []);

  const onChangePage = React.useCallback(
    (event: unknown, valuePage: number) => {
      props.onChangePage(valuePage);
    },
    []
  );

  const onChangeRowsPerPage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChangePerPage(parseInt(event.target.value, 10));
      props.onChangePage(1);
    },
    []
  );

  return (
    <div className={classes.root} data-pagination>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={total}
        page={page - 1}
        rowsPerPage={perPage}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
      <Pagination
        count={Math.ceil(total / perPage)}
        defaultPage={defaultPage}
        page={page}
        onChange={onChangePage}
      />
    </div>
  );
};
