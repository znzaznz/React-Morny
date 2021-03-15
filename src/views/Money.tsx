import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TagsSection from '../components/TagsSection';
import NoteSection from '../components/NoteSection';
import CategorySection from "../components/CategorySection/index"



const NumberPadSection = styled.section`
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      background: none;
      border: none;
      float: left;
      width: 25%;
      height: 64px;
      &.OK{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background-color: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background-color: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background-color: #B8B8b8;
      }
      &:nth-child(12){
        background-color: #9a9a9a;
      }
      &:nth-child(14){
        background-color: #a9a9a9;
      }
    }
  }
`

export default function Money(){
    return (
        <Layout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection>
                <div className={"output"}>100</div>
                <div className={"pad clearfix"}>
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
                    <button className={"OK"}>OK</button>
                    <button className={"zero"}>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}