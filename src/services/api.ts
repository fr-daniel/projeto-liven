import axios from 'axios';

const axiosInstancia = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

export default axiosInstancia;
