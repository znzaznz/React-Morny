import {useEffect, useRef} from 'react';

const useUpdate = (fn:Function,deps:any[])=>{
    //将第一次update的值排除出去
    const count = useRef(0)
    useEffect(()=>{
        count.current += 1;
    })
    //之后对deps的值进行监听并执行函数
    useEffect(()=>{
        if (count.current > 1){
            fn()
        }
    },deps)
}

export {useUpdate}