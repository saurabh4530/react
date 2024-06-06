// @ts-nocheck
/* eslint-disable no-undef */
import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useReducer ,useEffect} from 'react'
import axios from 'axios'


const initialState={
    loading:true,
    error:"",
    post:{}
}
const reducer=(state,action)=>{


switch (action.type) {
    case "FETCH_SUCCESS":
     return {  loading:false,
        error:"",
        post:action.payload
        }
    case "FETCH_ERROR":
     return {  loading:false,
        error:"something went Wrong................!",
        post:{}
        }
        

    default:
        return state}
    }
export default function DataFetchTwo() {
 const [state ,dispatch]=useReducer(reducer,initialState)

 useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>{
       dispatch({type: "FETCH_SUCCESS" ,payload:response.data }) 
    })
    .catch(error=>{
        
        dispatch({type: "FETCH_ERROR"  }) 
    }
    )
},[])
    
  return (
    <>
        <div>DataFetch using useReducer</div>
        {state.loading?"loading":state.post.title}
    {state.error?error:null}
    
    
    </>
  )
}
