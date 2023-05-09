import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': '724429d128mshd75f6dc3c8dbe40p194179jsnec7951cb0000',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}