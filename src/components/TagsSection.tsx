import React from 'react';
import styled from "styled-components";

const TagSection = styled.section`
  background-color: white;
  padding: 12px 16px;
  > ol{
    margin: 0 -12px;
    > li{
        background-color: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px;
      }
  }
  >button{
    background: none;
    border: none;
    padding: 2px 4px;
    color: #666;
    border-bottom: 1px solid #333;
    margin-top: 7px;
  }
`

export default function TagsSection() {
    return (
        <TagSection>
            <ol>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol>
            <button>新增标签</button>
        </TagSection>
    )
}