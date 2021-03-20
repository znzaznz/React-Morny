import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'react-router-dom';
import {useTags} from '../lib/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import {Center} from '../components/Center';

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;
  >li{
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    margin-left: 16px;
    >a{
      padding: 12px 16px 12px 0;
      justify-content: space-between;
      align-items: center;
      display: flex;
    }
  }
`

export default function Tags(){
    const {tags,addTag} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map((item)=>{
                    return <li key={item.id} >
                        <Link to={`/tags/${item.id}`}>
                            <span className={'oneLine'}>{`${item.name}`}</span>
                            <Icon name={'right'}/>
                        </Link>
                    </li>
                })}
            </TagList>
            <Center>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    )
}