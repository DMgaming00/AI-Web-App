import axios from 'axios';

// Create an Axios instance with base URL
const api = axios.create({
    baseURL: '/api', // Relative URL for Vercel deployment
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generatePlan = async (goal) => {
    try {
        const response = await api.post('/agent', { goal });
        return response.data;
    } catch (error) {
        console.error('Error generating plan:', error);
        throw error;
    }
};

export default api;
