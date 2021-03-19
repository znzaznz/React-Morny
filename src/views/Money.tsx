import React, {useState} from 'react';
import Layout from '../components/Layout';
import TagsSection from '../components/TagsSection/TagsSection';
import NoteSection from '../components/NoteSection/NoteSection.jsx';
import CategorySection from "../components/CategorySection/"
import NumberPadSection from "../components/NumberPadSection"

type Category = "+" | "-"

export default function Money(){
    const [obj,setObj] = useState({
        tags:[] as number[],
        note:"",
        category:"-" as Category,
        amount:0
    })
    type selected = typeof obj
    const onChange = (selected:Partial<selected>)=>{
        setObj({
            ...obj,...selected
        })
    }
    return (
        <Layout>
            <TagsSection selected={obj.tags} onChange={(tags:any)=>onChange({tags})}/>
            <NoteSection value={obj.note} onChange={(note:string)=>{onChange({note})}}/>
            <CategorySection value={obj.category} onChange={(category:Category)=>{onChange({category})}}/>
            <NumberPadSection onChange={(amount:number)=>{onChange({amount})}}  onOK={()=>{}} />
        </Layout>
    )
}