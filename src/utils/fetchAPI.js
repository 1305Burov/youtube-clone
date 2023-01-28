import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
console.log(process.env.REACT_APP_RAPID)
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

