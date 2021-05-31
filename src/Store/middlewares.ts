export const addStoreDispatch = () => async(dispatch: any) => {
    // dispatch({
    //   type: 'ADD_STORE',
    // })
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()
    console.log('MIDDLE')
    dispatch({
      type: 'SUCCESS',
      payload: data
    })
  }
  catch(error){
    console.log('error');
    
    dispatch({
      type: 'FAILURE'
    })
  }
  }