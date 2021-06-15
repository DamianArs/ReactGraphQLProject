export const deleteCustomerAction = 'deleteCustomerAction'

export const deleteCustomer = (id: string) => ({
  type: 'deleteCustomerAction',
  payload: id
})
