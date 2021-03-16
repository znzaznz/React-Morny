import React from 'react';
import Layout from '../components/Layout';
import TagsSection from '../components/TagsSection/TagsSection';
import NoteSection from '../components/NoteSection/NoteSection';
import CategorySection from "../components/CategorySection/"
import NumberPadSection from "../components/NumberPadSection"

export default function Money(){
    return (
        <Layout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </Layout>
    )
}