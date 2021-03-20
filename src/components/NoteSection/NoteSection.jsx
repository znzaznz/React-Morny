import React from 'react';
import styled from "styled-components";
import {Input} from '../Input.jsx';

const NotesSection = styled.section`
    padding: 14px 16px;
    font-size: 14px;
`
export default function NoteSection(props) {
    const x = (e)=>{
        if (e.target !== null){
            props.onChange(e.target.value)
        }
    }
    return (
        <NotesSection>
            <Input labelName="备注"
                    type="text"
                   placeholder={"请在这里添加新的备注"}
                   value={props.value}
                   onChange={x} />
        </NotesSection>
    )
}