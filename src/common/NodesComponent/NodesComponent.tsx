import * as React from 'react'
import { useHistory } from 'react-router'
import { useLazyQuery } from "@apollo/react-hooks";
import { NodesQuery, OneNodeQuery } from '../../graphql/queries';
import { Node } from '../../Types';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useState } from 'react';
import { useCallback } from 'react';
import { values } from 'lodash';

export const NodesComponent: any = () => {
  const[state, setState] = useState([])
  const [fetchNodes, fetchNodesProps] = useLazyQuery(NodesQuery)
  const [fetchOneNode, fetchOneNodeProps] = useLazyQuery(OneNodeQuery)
  const history = useHistory()
  const handleRoute = useCallback((value: Node) => {
      fetchOneNode({variables:{
        parent: value.name
      }})
    
  },[fetchOneNodeProps.data])
   
  React.useEffect(() => {
    fetchNodes({variables:{
      page: 1,
      perPage: 10
    }})
   
  }, [fetchNodesProps.data])

  React.useEffect(()=>{
    if(fetchOneNodeProps.data){
      console.log('TTTTT', fetchOneNodeProps.data.items.nodes);
      setState(fetchOneNodeProps.data.items.nodes)
      
    }
  },[handleRoute])
  

  if(state.length === 0){
  if(fetchNodesProps.data)
  return (
    fetchNodesProps.data.items.map((one: Node)=>(
      <div key={one.name} style={{margin: '0 32px', display: 'flex', alignItems:'center'}}>
        {one.nodes === null ? <ArrowRightAltIcon/> : <PlaylistAddCheckIcon style={{color: '#3f51b5'}} />}
        <h3  style={{marginLeft: '10px', color: one.nodes === null ? 'black' : '#3f51b5'}} 
        onClick={one.nodes ? ()=> handleRoute(one) : ()=>{}}>{one.name}</h3>
      </div>
      
    ))
  )
  return null
    }
  else{
  return(
    state.map((one: Node)=>(
      <div key={one.name} style={{margin: '0 32px', display: 'flex', alignItems:'center'}}>
        {one.nodes  ? <PlaylistAddCheckIcon style={{color: '#3f51b5'}}/> : <ArrowRightAltIcon  />}
        <h3 style={{marginLeft: '10px', color: one.nodes === null ? 'black' : '#3f51b5'}} 
        onClick={one.nodes ? ()=> handleRoute(one) : ()=>{} }>{one.name}</h3>
      </div>
  )
    )
  )
    }
    }