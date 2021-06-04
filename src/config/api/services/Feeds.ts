import axios from 'axios';
import env from '../../../../env';

const Feeds = axios.create({
  baseURL: `${env.BASE_URL}/feeds/`,
});

export default Feeds;
