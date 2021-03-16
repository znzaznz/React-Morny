import React, {useState} from 'react';
import NumberPadSection from './NumberPadSection';
import {generateOutput} from './generateOutput';

export default function Index() {
    const [output, setOutput] = useState('0');
    const onClickNum = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        if (text) {
            if (output.length >= 16){
                alert("数字太大了")
            }else if (output.indexOf(".") !== -1 && output.length - output.indexOf(".") > 2 ){
                alert("数字输入错误")
            }else {
                setOutput(generateOutput(text,output) as string)
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