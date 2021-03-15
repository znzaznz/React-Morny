import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const TagSection = styled.section`
  
`
const NotesSection = styled.section`

`
const CategorySection = styled.section`

`
const NumberPadSection = styled.section`

`


export default function Money(){
    return (
        <Layout>
            <TagSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <button>新增标签</button>
                </ol>
            </TagSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
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
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}