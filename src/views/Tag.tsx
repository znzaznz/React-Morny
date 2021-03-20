import React from 'react';
import {useTags} from '../lib/useTags';
import {useParams,useHistory} from "react-router-dom"
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input.jsx';
import {Center} from '../components/Center';

type Params = {
    id:string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: white;
`
const InputWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 8px;
`


const Tag:React.FC = ()=>{
    const {findTag,update,deleteTag} = useTags();
    let {id} = useParams<Params>()
    const tag = findTag(id)

    const history = useHistory()
    const onClickBack = ()=>{
        history.goBack()
    }
    return (
        <Layout>
            <Topbar>
                <div onClick={()=>{onClickBack()}}>
                    <Icon name={"left"}/>
                </div>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {tag ? <div>
                <div>
                    <InputWrapper>
                        <Input labelName={"标签名"} type={"text"} placeholder={"标签名"} value={tag.name}
                               onChange={(e:any)=>{
                                   update(tag.id,{name:e.target.value})
                               }}/>
                    </InputWrapper>
                </div>
                <Center>
                    <Button onClick={()=>{deleteTag(tag.id)}}>删除标签</Button>
                </Center>
            </div> : <div>tag不存在</div>}
        </Layout>
    )
}

export {Tag}