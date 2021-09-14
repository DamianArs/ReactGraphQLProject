import * as React from "react";
import { Form, Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { InputAdornment } from "@material-ui/core";
import { Customer } from "../../Types";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router";

const useStyles = makeStyles(
  {
    root: {},
    form: {
      display: "flex",
    },
    button: {
      width: "160px",
      marginRight: "50px",
    },
    field: {
      width: "400px",
      marginRight: "60px",
    },
  },
  {
    name: "SearchComponent",
  }
);

interface SearchProps {
  id: string;
}

interface SearchComponentProps {
  handleOneCustomer: (value: Customer[] | string) => void;
  clearOneCustomer: () => void;
  stateCustomers: Customer[];
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  handleOneCustomer,
  clearOneCustomer,
  stateCustomers,
}) => {
  const [searchedCustomers, setSearchedCustomers] = React.useState<
    Customer[] | string
  >([]);
  const history = useHistory();
  const classes = useStyles();

  const onSubmit = React.useCallback(
    (values: SearchProps) => {
      const { id } = values;
      const SearchedCustomers = stateCustomers.filter((customer: Customer) => {
        if (customer.id.includes(id)) {
          return customer;
        }
      });
      if (SearchedCustomers.length > 0) {
        setSearchedCustomers(SearchedCustomers);
      } else if (SearchedCustomers.length === 0) {
        setSearchedCustomers("none");
      }
    },
    [stateCustomers]
  );

  React.useEffect(() => {
    handleOneCustomer(searchedCustomers);
  }, [searchedCustomers]);
  const handleNewCustomer = React.useCallback(() => {
    history.push("./List/NewCustomer");
  }, []);

  return (
    <Form
      initialValues={{
        id: "",
      }}
      onSubmit={onSubmit}
      render={({ form, handleSubmit, values }) => (
        <div className={classes.root}>
          <Paper style={{ padding: "20px", marginBottom: "60px" }} id="search">
            <form onSubmit={handleSubmit} className={classes.form}>
              <Field
                name="id"
                render={({ input }) => (
                  <TextField
                    label="Please add UUID"
                    variant="outlined"
                    size="small"
                    className={classes.field}
                    {...input}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {values.id && (
                            <ClearIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                form.reset();
                              }}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Box display="flex" width="100%" justifyContent="space-between">
                <Box display="flex">
                  <Button
                    disabled={!values.id}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Search
                  </Button>
                  <Button variant="outlined" onClick={clearOneCustomer}>
                    Clear Search
                  </Button>
                </Box>
                <Button variant="outlined" onClick={handleNewCustomer}>
                  New Customer
                </Button>
              </Box>
            </form>
          </Paper>
        </div>
      )}
    />
  );
};
