import mongoose from 'mongoose';
import Resource from '../Models/Resource.js';
import connectDB from '../Config/MongoDB.js';
import dotenv from 'dotenv';

dotenv.config();

const seedResources = async (resources) => {
    try {
        await connectDB();
        
        // Clear existing resources
        await Resource.deleteMany({});
        
        if (resources && resources.length > 0) {
            // Insert new resources if provided
            const seededResources = await Resource.insertMany(resources);
            console.log('Resources seeded successfully:', seededResources.length);
        } else {
            console.log('No resources provided for seeding. Database cleared.');
        }
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding resources:', error);
        process.exit(1);
    }
};

// Example usage:
// seedResources([/* array of resources */]); 

// To just clear the database:
// seedResources(); 