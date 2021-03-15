import React from 'react';
import {Link, NavLink} from 'react-router-dom';
require('../icons/money.svg'); //这个跟vue中一样,不能直接用import导入
require("../icons/Statistics.svg")
require("../icons/tag.svg")

//这样并不好，因为还是重复
let importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importAll(require.context("../icons",true,/\.svg$/));} catch (error){console.log(error);}

type Props = {
    name:string,
    value:string,
    url:string
}

export default function Icon(props:Props){
            return (
                <li>
                    <NavLink to={props.url} activeClassName={"selected"}>
                        <svg className={'icon'}>
                            <use xlinkHref={`#${props.name}`}/>
                        </svg>
                        {props.value}
                    </NavLink>
                </li>
            )
}