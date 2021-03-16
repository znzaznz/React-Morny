import React, {useRef, useState} from 'react';
import styled from "styled-components";

const NotesSection = styled.section`
    padding: 0 16px;
    font-size: 14px;
    > label{
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
    }
`

export default function NoteSection() {
    const [note,setNote] = useState('')
    const refInput = useRef<HTMLInputElement>(null)
    const x = ()=>{
        if (refInput.current !== null){
            setNote(refInput.current.value)
        }
    }
    return (
        <NotesSection>
            <label>
                <span>备注</span>
                <input type="text" placeholder={"请在这里添加新的备注"}  defaultValue={note} onBlur={x} ref={refInput}/>
            </label>
        </NotesSection>
    )
}