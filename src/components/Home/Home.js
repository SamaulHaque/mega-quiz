import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from './banner-image.jpg'
import './Home.css'
import Topic from '../Topic/Topic';

const Home = () => {
    const allTopics= useLoaderData();
    const topics=allTopics.data;
    console.log(topics)
    return (
        <div>
            <header className='home-header'>
                <img src={image} alt="" />
                <h3>Playing Quiz Online is a unique and fun way to engage the learners. It does not matter at what kind of location the learners can play quiz online as long as they have access to the internet.</h3>
            </header>
            <div className='topics-container'>
            {
                topics.map(topic => <Topic 
                    topic={topic}
                    key={topic.id}
                    ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;