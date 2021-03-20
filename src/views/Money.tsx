import React, {useState} from 'react';
import Layout from '../components/Layout';
import TagsSection from '../components/TagsSection/TagsSection';
import NoteSection from '../components/NoteSection/NoteSection.jsx';
import CategorySection from "../components/CategorySection/"
import NumberPadSection from "../components/NumberPadSection"
import {useRecords} from '../lib/useRecords';
import styled from 'styled-components';

const CategoryWapper = styled.div`
      background-color: #c4c4c4;
`

export default function Money(){
    //设置初始值
    const [record,setRecord] = useState({
        tags:[] as string[],
        note:"" as string,
        category:"-" as string,
        amount:0 as number,
        createdAt:"未知"
    })

    type selected = typeof record
    const onChange = (selected:Partial<selected>)=>{
        setRecord({
            ...record,...selected
        })
    }

    // //编写提交键
    const {addRecord} =  useRecords()
    const submit = ()=>{
        if (record.tags.length ===  0){
            console.log(1);
            alert("请至少选中一个标签")
        }else{
            if(record.amount > 0){
                console.log(2);
                addRecord(record)
                setRecord({
                    tags:[] as string[],
                    note:"" as string,
                    category:"-" as string,
                    amount:0 as number,
                    createdAt:"未知"
                })
            }else{
                alert("金额输入错误，请至少多于0块钱")
                console.log(3);
            }
        }
    }
    return (
        <Layout>
            <TagsSection selected={record.tags} onChange={(tags:any)=>onChange({tags})}/>
            <NoteSection value={record.note} onChange={(note:string)=>{onChange({note})}}/>
            <CategoryWapper>
                <CategorySection value={record.category} onChange={(category:string)=>{onChange({category})}}/>
            </CategoryWapper>
            <NumberPadSection value={record.amount} onChange={(amount:number)=>{onChange({amount})}}  onOK={submit} />
        </Layout>
    )
}