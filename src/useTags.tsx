import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
    {id:createId(),name:"衣"},
    {id:createId(),name:"食"},
    {id:createId(),name:"住"},
    {id:createId(),name:"行"}
]
//抽离useTags函数
const useTags = ()=>{
    //此时思考到，如果是字符串的数组，会导致代码的bug，所以改成对象的数组
   const [tags,setTags] = useState<{id:number,name:string}[]>(defaultTags)
    const findTag = (id:number)=>{return  tags.filter(tag=>tag.id === id)[0]}
    const findTagIndex = (id:number)=>{
       let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id){
                result = i
                break
            }
        }
        return result
    }
    const update = (id:number,obj:{name:string})=>{
       const index = findTagIndex(id)
        //深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把tagsClone的第index删掉，换成{id:id，name:obj.name}
        tagsClone.splice(index,1,{id:id,name:obj.name})
        setTags(tagsClone)
    } // obj={name:2}
    return {tags, setTags, findTag, update,findTagIndex}
}

export {useTags}