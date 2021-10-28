import axios from 'axios';

export const Key = "cf9d1806c1msh000cd257403c200p1c3615jsn5b11103a8481";
export const Host = "apidojo-forever21-v1.p.rapidapi.com";

const api = axios.create({
	baseURL: "https://apidojo-forever21-v1.p.rapidapi.com/",
});

export default api;