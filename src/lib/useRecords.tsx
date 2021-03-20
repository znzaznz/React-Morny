import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useRecords = ()=>{
    const [records,setRecords] = useState<any[]>([])

    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
    },[])

    const addRecord = (record:any)=>{
        const newRecord = {...record,createAt:(new Date()).toISOString()}
        setRecords([...records,newRecord])
    }
    useUpdate(()=>{
        window.localStorage.setItem("records",JSON.stringify(records))
    },[records])
    return {records,addRecord}
}


export {useRecords}