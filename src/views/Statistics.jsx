import React, {useState} from 'react';
import Layout from '../components/Layout';
import CategorySection from "../components/CategorySection"
import styled from 'styled-components';
import {useRecords} from '../lib/useRecords';
import {useTags} from '../lib/useTags';
import day from "dayjs"
import { v4 as uuid } from 'uuid';


const CategoryWrapper = styled.div`
  background-color: white;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 15px;
  line-height: 20px;
  padding: 10px 16px;
   > .note{
      margin-right: auto;
      margin-left: 16px;
      color: #999;
   }
`

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

export default function Statistics(){
    const [category,setCategory] = useState("-")
    const {records} = useRecords();
    const {getTag} = useTags();
    const selectedRecords = ()=>{
        return records.filter(r=>r.category === category)
    }

    //分组
    const hash = {}
    selectedRecords().forEach(r=>{
        const key = day(r.createdAt).format("YYYY-MM-DD")
        if (!(key in hash)){
            hash[key] = []
        }
        hash[key].push(r)
    })

    const array = Object.entries(hash).sort((a,b)=>{
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })


    return (
       <Layout>
           <CategoryWrapper>
            <CategorySection onChange={(value) => {setCategory(value)} } value={category}/>
           </CategoryWrapper>
           {array.map(([date,records])=>{
               return (
                   <div key={uuid()}>
                       <Header>{date}</Header>
                       <div>
                           {records.map((item)=>{
                               return (
                                   <Item key={uuid()}>
                                       <div className="tags">
                                           {item.tags.map((tagID) => <span key={tagID}>{getTag(tagID)} </span>)}
                                       </div>
                                       <div className="note">
                                           {item.note && <div className={"note"}>{item.note}</div>}
                                       </div>
                                       <div className="amount">
                                           ￥{item.amount}
                                       </div>
                                       <div>
                                           {day(item.createdAt).format("YYYY年MM月DD日")}
                                       </div>
                                   </Item>)
                           })}
                       </div>
                   </div>
                   )
           })}

       </Layout>
    )
}