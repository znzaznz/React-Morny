import React, {ChangeEventHandler, useRef} from 'react';
import styled from "styled-components";
import {Input} from '../Input';

const NotesSection = styled.section`
    padding: 0 16px;
    font-size: 14px;
`
export default function NoteSection(props) {
    const note = props.value;
    const x = (e)=>{
        if (e.target !== null){
            props.onChange(e.target.value)
        }
    }
    return (
        <NotesSection>
            <Input type="text" placeholder={"请在这里添加新的备注"}
                   value={note}
                   onChange={x} />
        </NotesSection>
    )
}