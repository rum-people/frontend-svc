import axios from "axios";

const BASE_URL = 'http://localhost:8000';

export default class AnalyticService {

    static async getTopKeywords(days, socialNetwork, keyword) {
        return await axios.get(BASE_URL + "/analytics/keywords");
    }

    static async getSentimentAnalysis(days, socialNetwork, keyword) {
        let url = BASE_URL + "/analytics/sentiment";

        if (days) {
            url += `?days=${days}`;
        }
        if (socialNetwork && socialNetwork.length > 0) {
            const socialNetworkQueryParam = socialNetwork.join(',');
            url += `${days ? '&' : '?'}socialNetwork=${socialNetworkQueryParam}`;
        }
        if (keyword) {
            url += `${days || socialNetwork ? '&' : '?'}quantity=${keyword}`;
        }
        console.log("url = " + url)
        return await axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        });
    }

    static async getPostsByKeyword(keyword, socialNetwork, quantity) {
        let url = BASE_URL + "/posts";

        if (keyword) {
            url += `?keyword=${keyword}`;
        }
        if (socialNetwork) {
            url += `${keyword ? '&' : '?'}socialNetwork=${socialNetwork}`;
        }
        if (quantity) {
            url += `${keyword || socialNetwork ? '&' : '?'}quantity=${quantity}`;
        }
        console.log("url = " + url)
        return await axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        });
    }
}