import {  useRouter } from 'next/router'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Tab from "../Components/Tab/DisciplineTab";


export default function disciplines() {

    const route = useRouter()
    const { isAuthenticated } = useSelector(state => state.auth)

    useEffect(()=>{
      if(!isAuthenticated){
        route.push('/')
      }
    },[isAuthenticated, route])
    
    
    return (
        <div style={{marginTop: 120, marginBottom: 400}}>
            <Tab />
        </div>
    )
}
