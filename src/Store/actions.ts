export const deleteCustomerAction = "deleteCustomerAction";

export const deleteCustomer = (id: string) => ({
  type: "deleteCustomerAction",
  payload: id,
});

export const addBreadCrumb = (path: string) => ({
  type: "addBreadCrumb",
  payload: path,
});
