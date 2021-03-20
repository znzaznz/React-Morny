import React, {useState} from 'react';
import Layout from '../components/Layout';
import CategorySection from "../components/CategorySection"
import styled from 'styled-components';
import {useRecords} from '../lib/useRecords';
import {useTags} from '../lib/useTags';
import day from "dayjs"

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

export default function Statistics(){
    const [category,setCategory] = useState<"-" | "+">("-")
    const {records} = useRecords();
    const {getTag} = useTags();
    return (
       <Layout>
           <CategoryWrapper>
            <CategorySection onChange={(value:any) => {setCategory(value)} } value={category}/>
           </CategoryWrapper>

           <div>
               {records.map((item)=>{
                   return (
                   <Item key={item.tags[0]}>
                       <div className="tags">
                           {item.tags.map((tagID:any) => <span key={tagID}>{getTag(tagID)}</span>)}
                       </div>
                       <div className="note">
                           {item.note && <div className={"note"}>{item.note}</div>}
                       </div>
                       <div className="amount">
                           ￥{item.amount}
                       </div>
                           {/*{day(item.createdAt).format("YYYY年MM月DD日")}*/}
                   </Item>)
               })}
           </div>
       </Layout>
    )
}