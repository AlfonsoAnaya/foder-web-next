const apiUrl = 'http://localhost:8000/api';

// Function to fetch data (Read)
export const fetchData = async (endpoint:string) => {
    try {
        const response = await fetch(`${apiUrl}/${endpoint}`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

interface PostOptions extends RequestInit {
    headers?: HeadersInit;
}

export const postData = async (endpoint:string, data:any, options: PostOptions = {}) => {
    try {
        const response = await fetch(`${apiUrl}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                ...options.headers
            },
            ...options 
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonResponse = await response.json();
        return jsonResponse
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
    }
}
