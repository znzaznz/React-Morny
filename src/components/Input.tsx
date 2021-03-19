import React from 'react';
import styled from "styled-components";

const Label = styled.label`
      display: flex;
      align-items: center;
      >span{
        margin-right: 16px;
        white-space: nowrap;
      }
      >input{
        display: block;
        width: 100%;    
        height: 72px;    
        background: none;
        border: 0;
      }
   
`
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input:React.FC  = (props:Props)=>{
    const {...rest} = props
    return (
        <Label>
            <span>备注</span>
            <input {...rest}/>
        </Label>
    )
}

export {Input}