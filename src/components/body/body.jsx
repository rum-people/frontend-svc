import React, {useEffect, useState} from 'react';
import './body.css';
import SentimentChart from "./sentiment-chart/sentiment-chart";
import SentimentMessage from "./messages/sentiment_message";
import MentionMessage from "./messages/mentions_message";
import PostCard from "./post-card/post-card";
import {Pagination, Stack} from "@mui/material";
import AnalyticService from "../../services/AnalyticService";
import consts from "../utils/consts";
import GeneralChart from "./analytics-charts/general-chart";
import {Bar, Line} from "react-chartjs-2";
import WordChart from "./analytics-charts/word-chart";

function Body({term, period, selectedSources}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await AnalyticService.getPostsByKeyword(term, selectedSources);
                console.log("Posts response is ", response.data)
                setPosts(response.data);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        }

        if (term !== "") fetchPosts();
    }, [term, period, selectedSources]);

    // Состояние для отслеживания текущей страницы пагинации
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    // Получить индекс первого и последнего поста для текущей страницы
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    function generatePosts() {
        return currentPosts.map((post, index) => (
            <PostCard
                key={index}
                title={post.title}
                source={post.socialNetwork}
                emotion={post.emotion}
                text={post.text}
                link={post.link}
            />
        ))
    }

    function getChart() {
        return term === ""
            ? <GeneralChart
                term={term}
                period={period}
                selectedSources={selectedSources}
            />
            : <WordChart
                term={term}
                period={period}
                selectedSources={selectedSources}
            />
    }

    return (
        <div className="main-block">
            <div className="row">
                <div className="graph-container white-rectangle">
                    {getChart()}
                </div>
                <div className="other-info orange-rectangle">
                    <MentionMessage/>
                </div>
            </div>

            <div className="row">
                <div className="other-info orange-rectangle">
                    <SentimentMessage/>
                </div>
                <div className="graph-container white-rectangle">
                    <SentimentChart
                        term={term}
                        period={period}
                        selectedSources={selectedSources}
                    />
                </div>
            </div>

            {term !== "" && (<div className="row">
                <Stack spacing={2} justifyContent="center">
                    <Pagination
                        count={Math.ceil(posts.length / postsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </Stack>
                <div>
                    {generatePosts()}
                </div>
                <Stack spacing={2} justifyContent="center">
                    <Pagination
                        count={Math.ceil(posts.length / postsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </Stack>
            </div>)}
        </div>
    );
}

export default Body;