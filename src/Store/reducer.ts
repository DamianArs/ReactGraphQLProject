const SUCCESS = 'SUCCESS'

const name: any = 'damian'

export const reducer = (state=name, action:any) => {

  switch(action.type){
    case 'SUCCESS':
      console.log('AAAAA',action.payload);
      
       return{
      //   ...state,
      //  posts: action.payload
        }
       
  }


  return state
}