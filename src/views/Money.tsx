import React, {useState} from 'react';
import Layout from '../components/Layout';
import TagsSection from '../components/TagsSection/TagsSection';
import NoteSection from '../components/NoteSection/NoteSection.jsx';
import CategorySection from "../components/CategorySection/"
import NumberPadSection from "../components/NumberPadSection"
import {useRecords} from '../lib/useRecords';

export default function Money(){
    //设置初始值
    const [obj,setObj] = useState({
        tags:[] as string[],
        note:"" as string,
        category:"-" as string,
        amount:0 as number,
        createdAt:"未知"
    })

    type selected = typeof obj
    const onChange = (selected:Partial<selected>)=>{
        setObj({
            ...obj,...selected
        })
    }

    // //编写提交键
    const {addRecord} =  useRecords()
    const submit = ()=>{
        // console.log(obj);
        addRecord(obj)
        setObj({
            tags:[],
            note:"123",
            category:"+",
            amount:0,
            createdAt:"未知"
        })
    }
    return (
        <Layout>
            <TagsSection selected={obj.tags} onChange={(tags:any)=>onChange({tags})}/>
            <NoteSection value={obj.note} onChange={(note:string)=>{onChange({note})}}/>
            <CategorySection value={obj.category} onChange={(category:string)=>{onChange({category})}}/>
            <NumberPadSection onChange={(amount:number)=>{onChange({amount})}}  onOK={submit} />
        </Layout>
    )
}