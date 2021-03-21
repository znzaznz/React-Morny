import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useRecords = ()=>{
    const [records,setRecords] = useState<any[]>([])

    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
    },[])

    const addRecord = (record:any)=>{
        const newRecord = {...record,createdAt:(new Date()).toISOString()}
        console.log(newRecord);
        setRecords([...records,newRecord])
    }
    useUpdate(()=>{
        window.localStorage.setItem("records",JSON.stringify(records))
    },records)
    return {records,addRecord}
}


export {useRecords}