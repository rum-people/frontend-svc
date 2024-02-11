import axios from "axios";
import consts from "../components/utils/consts";

const BASE_URL = 'http://upstream';

export default class AnalyticService {

    static async getTopKeywordsGeneral(days, socialNetwork) {
        let url = BASE_URL + "/analytics/keywords/top";

        if (days) {
            url += `?days=${days}`;
        }
        
        if (socialNetwork.length === 0 ) socialNetwork = [consts.News, consts.Reddit]
        if (socialNetwork) {
            const socialNetworkQueryParam = socialNetwork.join(',');
            url += `${days ? '&' : '?'}social_network=${socialNetworkQueryParam}`;
        }
        console.log("getTopKeywordsGeneral url = " + url)
        return await axios.get(url);
    }

    static async getTopKeywordsForWord(days, socialNetwork, keyword) {
        let url = BASE_URL + "/analytics/keywords";

        if (days) {
            url += `?days=${days}`;
        }
        
        if (socialNetwork.length === 0 ) socialNetwork = [consts.News, consts.Reddit]
        if (socialNetwork) {
            const socialNetworkQueryParam = socialNetwork.join(',');
            url += `${days ? '&' : '?'}social_network=${socialNetworkQueryParam}`;
        }
        if (keyword) {
            url += `${days || keyword ? '&' : '?'}keyword=${keyword}`;
        }
        console.log("getTopKeywordsForWord url = " + url)
        return await axios.get(url);
    }

    static async getSentimentAnalysisForWord(days, socialNetwork, keyword) {
        let url = BASE_URL + "/analytics/sentiment";

        if (days) {
            url += `?days=${days}`;
        }
        
        if (socialNetwork.length === 0 ) socialNetwork = [consts.News, consts.Reddit]
        if (socialNetwork) {
            const socialNetworkQueryParam = socialNetwork.join(',');
            url += `${days ? '&' : '?'}social_network=${socialNetworkQueryParam}`;
        }
        if (keyword) {
            url += `${days || socialNetwork ? '&' : '?'}keyword=${keyword}`;
        }
        console.log("getSentimentAnalysisForWord url = " + url)
        return await axios.get(url);
    }

    static async getSentimentAnalysisGeneral(days, socialNetwork) {
        let url = BASE_URL + "/analytics/sentiment";

        if (days) {
            url += `?days=${days}`;
        }
        if (socialNetwork.length === 0 ) socialNetwork = [consts.News, consts.Reddit]
        if (socialNetwork) {
            const socialNetworkQueryParam = socialNetwork.join(',');
            url += `${days ? '&' : '?'}social_network=${socialNetworkQueryParam}`;
        }
        console.log("getSentimentAnalysisGeneral url = " + url)
        return await axios.get(url);
    }

    static async getPostsByKeyword(keyword, socialNetwork) {
        let url = BASE_URL + "/posts";

        if (keyword) {
            url += `?keyword=${keyword}`;
        }
        if (socialNetwork.length === 0 ) socialNetwork = [consts.News, consts.Reddit]
        if (socialNetwork) {
            const socialNetworkQueryParam = socialNetwork.join(',');
            url += `${keyword ? '&' : '?'}social_network=${socialNetworkQueryParam}`;
        }
        console.log("getPostsByKeyword url = " + url)
        return await axios.get(url);
    }
}