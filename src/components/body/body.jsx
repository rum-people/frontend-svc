import React, {useEffect, useState} from 'react';
import './body.css';
import SentimentChart from "./sentiment-chart/sentiment-chart";
import emotGeneral from './/emotions-general.json';
import emotQuery from './/emotions-query.json';
import SentimentMessage from "./messages/sentiment_message";
import MentionMessage from "./messages/mentions_message";
import PostCard from "./post-card/post-card";
import {Pagination, Stack} from "@mui/material";
import postsData from ".//posts.json"
import AnalyticService from "../../services/AnalyticService";
import {forEach} from "react-bootstrap/ElementChildren";

function Body({term, period, selectedSources}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                // let sources = selectedSources.empty() ? [consts.Twitter, consts.News, consts.Reddit] : selectedSources
                //
                // const promises = sources.map(async source => {
                //     return await AnalyticService.getPostsByKeyword(term, source, 10);
                // });
                //
                // const responses = await Promise.all(promises);
                // const combinedPosts = responses.flatMap(response => response.data);
                // console.log(combinedPosts)

                setPosts(postsData);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, [term, selectedSources]);

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
                title={post.link}
                source={post.socialNetwork}
                emotions={post.emotions}
                text={post.text}
                link={post.link}
            />
        ))
    }

    return (
        <div className="main-block">
            <div className="row">
                <div className="graph-container white-rectangle">
                    <div className="graph-placeholder"></div>
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

            <div className="row">
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
            </div>
        </div>
    );
}

export default Body;