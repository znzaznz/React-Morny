import React from 'react';
import styled from "styled-components";
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

const TagSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  background-color: white;
  padding: 12px 16px;
  > ol{
    margin: 0 -12px;
    > li{
        background-color: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px;
        &.selected{
          background-color: grey;
        }
      }
  }
  >button{
    background: none;
    border: none;
    padding: 2px 4px;
    color: #666;
    border-bottom: 1px solid #333;
    margin-top: 7px;
  }
`


type Props = {
    selected:number[],
    onChange:Function
}

const TagsSection:React.FC<Props> = (props)=>{
    const {tags,setTags} = useTags();
    //增加tag标签
    const onAddTag = ()=>{
        const tagName = window.prompt("新标签的名称为")
        if (tagName !== null){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    }
    //标签标选功能
    const onToggleTag = (item:number)=>{
        const index = props.selected.indexOf(item)
        if (index >= 0){
            props.onChange(props.selected.filter((tag)=>{
                return tag !== item
            })) //如果选项在selected数组中，则将这个选项踢出
        }else {
            props.onChange([...props.selected,item])
        }
    }

    return (
        <TagSection>
            <ol>
                {tags.map(item=>{
                    return <li key={item.id} onClick={()=>{onToggleTag(item.id)}}
                        className={props.selected.indexOf(item.id) >= 0 ? "selected" : ""}
                    >{item.name}</li>
                })}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagSection>
    )
}

export default TagsSection;