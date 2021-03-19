import React from 'react';
require('../icons/money.svg'); //这个跟vue中一样,不能直接用import导入
require("../icons/Statistics.svg")
require("../icons/tag.svg")

//这样并不好，因为还是重复
let importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importAll(require.context("../icons",true,/\.svg$/));} catch (error){console.log(error);}

type Props = {
    name?:string
}

export default function Icon(props:Props){
            return (
                <svg className={'icon'}>
                    {props.name && <use xlinkHref={`#${props.name}`}/>}
                </svg>
            )
}