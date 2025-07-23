// import dotenv from 'dotenv';
// dotenv.config();
import axios from 'axios';
import { getPDFUrl } from './supabaseStorageService';


const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/resources`;

export const resourceService = {
    // Get all resources with optional filters
    getResources: async (search = '', tag = '', type = '') => {
        try {
            const params = new URLSearchParams();
            if (search) params.append('search', search);
            if (tag) params.append('tag', tag);
            if (type) params.append('type', type);

            const response = await axios.get(`${BASE_URL}?${params.toString()}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Get a single resource
    getResource: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Create a new resource
    createResource: async (resourceData) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resourceData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create resource');
            }

            return await response.json();
        } catch (error) {
            console.error('Error creating resource:', error);
            throw error;
        }
    },

    // Increment download count
    incrementDownloadCount: async (resourceId) => {
        try {
            const response = await fetch(`${BASE_URL}/${resourceId}/download`, {
                method: 'PUT'
            });

            if (!response.ok) {
                throw new Error('Failed to update download count');
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating download count:', error);
            throw error;
        }
    }
};

export { getPDFUrl }; 