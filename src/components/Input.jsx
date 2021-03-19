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
        height: 44px;    
        background: none;
        border: 0;
      }
   
`

const Input  = (props)=>{
    const {labelName,...rest} = props
    return (
        <Label>
            <span>{labelName}</span>
            <input {...rest}/>
        </Label>
    )
}

export {Input}