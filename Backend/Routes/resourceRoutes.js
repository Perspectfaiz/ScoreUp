import express from 'express';
import * as resourceController from '../Controller/resourceController.js';
import auth from '../Middleware/auth.js';
import Resource from '../Models/Resource.js';

const router = express.Router();

// Public routes - no auth required
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find({});
        res.json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Resource submission route - handles both authenticated and unauthenticated submissions
router.post('/', async (req, res) => {
    try {
        console.log('Received resource submission:', req.body);

        // Validate required fields
        const requiredFields = ['title', 'description', 'type', 'tags', 'fileUrl', 'publicId'];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                message: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

        // Validate type
        if (!['PDF', 'Video'].includes(req.body.type)) {
            return res.status(400).json({ 
                message: 'Type must be either PDF or Video' 
            });
        }

        // Validate tags
        if (!Array.isArray(req.body.tags) || req.body.tags.length === 0) {
            return res.status(400).json({ 
                message: 'Tags must be a non-empty array' 
            });
        }

        // Create resource object
        const resourceData = {
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            tags: req.body.tags,
            fileUrl: req.body.fileUrl,
            publicId: req.body.publicId,
            thumbnailUrl: req.body.thumbnailUrl || '',
            downloadCount: 0,
            uploadedBy: null // Default to anonymous
        };

        console.log('Creating resource with data:', resourceData);

        const resource = new Resource(resourceData);
        const savedResource = await resource.save();
        
        console.log('Resource saved successfully:', savedResource);
        res.status(201).json(savedResource);
    } catch (error) {
        console.error('Error saving resource:', error);
        res.status(400).json({ 
            message: error.message || 'Failed to save resource',
            details: error.toString()
        });
    }
});

// Increment download count - handle both POST and PUT
router.route('/:id/download').post(async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        
        resource.downloadCount = (resource.downloadCount || 0) + 1;
        await resource.save();
        
        res.json({ 
            message: 'Download count updated successfully',
            downloadCount: resource.downloadCount 
        });
    } catch (error) {
        console.error('Error updating download count:', error);
        res.status(500).json({ message: error.message });
    }
}).put(async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        
        resource.downloadCount = (resource.downloadCount || 0) + 1;
        await resource.save();
        
        res.json({ 
            message: 'Download count updated successfully',
            downloadCount: resource.downloadCount 
        });
    } catch (error) {
        console.error('Error updating download count:', error);
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', auth, resourceController.deleteResource);

export default router; 