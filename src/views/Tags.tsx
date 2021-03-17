import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'react-router-dom';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

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

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background-color: #767676;
  border-radius: 4px;
  color: white;
  margin-top: 16px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Tags(){
    const {tags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map((item)=>{
                    return <li key={item} >
                        <Link to={`/tags/${item}`}>
                            <span className={'oneLine'}>{item}</span>
                            <Icon name={'right'}/>
                        </Link>
                    </li>
                })}
            </TagList>
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    )
}