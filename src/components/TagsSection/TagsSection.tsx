import React, {useState} from 'react';
import styled from "styled-components";

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
    selected:string[],
    onChange:Function
}
const TagsSection:React.FC<Props> = (props)=>{
    const [tags,setTags] = useState<string[]>(["衣","食","住","行"])
    const selectedTags = props.selected;
    const setSelectedTags = props.onChange;
    const onAddTag = ()=>{
        const tagName = window.prompt("新标签的名称为")
        if (tagName !== null){
            setTags([...tags,tagName])
        }
    }
    const onToggleTag = (item:string)=>{
        const index = selectedTags.indexOf(item)
        if (index >= 0){
            setSelectedTags(selectedTags.filter((tag)=>{
                return tag !== item
            })) //如果选项在selected数组中，则将这个选项踢出
        }else {
            setSelectedTags([...selectedTags,item])
        }
    }
    return (
        <TagSection>
            <ol>
                {tags.map(item=>{
                    return <li key={item} onClick={()=>{onToggleTag(item)}}
                        className={selectedTags.indexOf(item) >= 0 ? "selected" : ""}
                    >{item}</li>
                })}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagSection>
    )
}

export default TagsSection;