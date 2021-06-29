import * as React from 'react'
import { useHistory } from 'react-router'
import { useLazyQuery } from "@apollo/react-hooks";
import { NodesQuery } from '../../graphql/queries';
import { Node } from '../../Types';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export const NodesComponent: any = () => {
  const [fetchNodes, fetchNodesProps] = useLazyQuery(NodesQuery)
  const history = useHistory()
  const handleRoute = (value: any) => {
    if(value.nodes !==null){
      history.push(`/Nodes/${value.name}`)
      console.log('BBBB', value.nodes);
      
    }
  }
   
  React.useEffect(() => {
    fetchNodes({variables:{
      page: 1,
      perPage: 10
    }})

  }, [fetchNodesProps.data])

  React.useEffect(() => {
    if (fetchNodesProps) {
      console.log(fetchNodesProps.data);

    }

  }, [fetchNodesProps.data])


  if(fetchNodesProps.data)
  return (
    fetchNodesProps.data.items.map((one: Node)=>(
      <div style={{margin: '0 32px', display: 'flex', alignItems:'center'}}>
        {one.nodes === null ? <ArrowRightAltIcon/> : <PlaylistAddCheckIcon style={{color: '#3f51b5'}} />}
        <h3 style={{marginLeft: '10px', color: one.nodes === null ? 'black' : '#3f51b5'}} onClick={()=> handleRoute(one)}>{one.name}</h3>
      </div>
      
    ))
  )
  return null
}