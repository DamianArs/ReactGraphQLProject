import { Customer } from "../Types";

const getData = "getData";
const deleteCustomer = "deleteCustomer";
const addCustomer = "addCustomer";
const editCustomer = "editCustomer";
const addBreadCrumb = "addBreadCrumb";

const initialState = {
  customers: [],
  breadcrumbPath: [],
  total: 0,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getData:
      return {
        ...state,
        customers: action.payload.data.items.list,
        total: action.payload.data.items.total,
      };
    case deleteCustomer:
      return {
        ...state,
        customers: action.payload.data.deleteCustomer,
        total: action.payload.data.deleteCustomer.length,
      };
    case addCustomer:
      return {
        ...state,
        customers: action.payload.data.addCustomer,
        total: action.payload.data.addCustomer.length,
      };
    case editCustomer:
      return {
        ...state,
        customers: action.payload.data.editCustomer,
        total: action.payload.data.editCustomer.length,
      };
    case addBreadCrumb:
      return {
        ...state,
        breadcrumbPath: action.payload,
      };
  }
  return state;
};
