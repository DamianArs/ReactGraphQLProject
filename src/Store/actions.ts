export const ADD = 'ADD'

export const add = (name: string) => ({
  type: ADD,
  payload: {
   name
  }
})
