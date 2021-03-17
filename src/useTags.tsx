import {useState} from 'react';
import {createId} from './lib/createId';


//抽离useTags函数
const useTags = ()=>{
    //此时思考到，如果是字符串的数组，会导致代码的bug，所以改成对象的数组
   const [tags,setTags] = useState<{id:number,name:string}[]>([
       {id:createId(),name:"衣"},
       {id:createId(),name:"食"},
       {id:createId(),name:"住"},
       {id:createId(),name:"行"}
   ])
    return {
       tags:tags,
       setTags:setTags
    }
}

export {useTags}