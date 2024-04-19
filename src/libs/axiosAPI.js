import axios from 'axios'

export const AXIOS_API = `${process.env.NEXT_PUBLIC_API_URL}`;

export const AxiosConfig = () => {
    return {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
}

export const axiosGet = async (path) => {
    try {
        const response = await axios.get(`${AXIOS_API}${path}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}



export const instance = axios.create({baseURL: {API: AXIOS_API}})
