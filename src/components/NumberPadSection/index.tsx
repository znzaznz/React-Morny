import React, {useState} from 'react';
import NumberPadSection from './NumberPadSection';
import {generateOutput} from './generateOutput';

type Props = {
    value:number
    onChange:Function,
    onOK:Function
}

export default function Index(props:Props) {
    const [output, setOutput] = useState(props.value.toString());
    const onClickNum = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        if (text) {
            if (text === "OK"){
                props.onOK();
                setOutput(props.value.toString())
            }else {
                const num = generateOutput(text,output) as string
                setOutput(num)
                props.onChange(Number(num))
            }
        }
    };
    return (
        <>
            <NumberPadSection>
                <div className={'output'}>{output}</div>
                <div className={'pad clearfix'} onClick={onClickNum}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className={'OK'}>OK</button>
                    <button className={'zero'}>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </>
    );
}