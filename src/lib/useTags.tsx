import {useEffect,  useState} from 'react';
import { v4 as uuid } from 'uuid';
import {useUpdate} from './useUpdate';

// const defaultTags = [
//     {id:uuid(),name:"衣"},
//     {id:uuid(),name:"食"},
//     {id:uuid(),name:"住"},
//     {id:uuid(),name:"行"}
// ]
//抽离useTags函数
const useTags = ()=>{
    //此时思考到，如果是字符串的数组，会导致代码的bug，所以改成对象的数组
   const [tags,setTags] = useState<{id:string,name:string}[]>([])
    useEffect(()=>{
        setTags(JSON.parse(window.localStorage.getItem("tags") || '[]'))
    },[])
    useUpdate(()=>{window.localStorage.setItem("tags",JSON.stringify(tags))},tags)

    const findTag = (id:string)=>{return  tags.filter(tag=>tag.id === id)[0]}
    const findTagIndex = (id:string)=>{
       let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id){
                result = i
                break
            }
        }
        return result
    }
    const update = (id:string, {name}:{name:string})=>{
       setTags(tags.map(tag=>{
           return (id === tag.id ? {id,name} : tag)
       }))
    } // obj={name:2}
    const deleteTag = (id:string)=>{
        setTags(tags.filter(tag => tag.id!==id))
    }
    const addTag = ()=>{
        const tagName = window.prompt("新标签的名称为")
        if (tagName !== null){
            setTags([...tags,{id:uuid(),name:tagName}])
        }
    }
    const getTag = (id:string)=>{
       const tag = tags.filter(t=>t.id===id)[0]
        return tag ? tag.name : ''
    }
    return {tags, setTags, findTag, update,findTagIndex,deleteTag,addTag,getTag}
}

export {useTags}