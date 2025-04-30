import Resource from '../Models/Resource.js';

// Get all resources with optional filtering
export const getResources = async (req, res) => {
    try {
        const { search, tag, type } = req.query;
        let query = {};

        // Search by title or description
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        // Filter by tag
        if (tag) {
            query.tags = tag;
        }

        // Filter by type
        if (type) {
            query.type = type;
        }

        const resources = await Resource.find(query)
            .sort({ createdAt: -1 })
            .populate('uploadedBy', 'name');

        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resources', error: error.message });
    }
};

// Get a single resource
export const getResource = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id)
            .populate('uploadedBy', 'name');
        
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resource', error: error.message });
    }
};

// Create a new resource
export const createResource = async (req, res) => {
    try {
        const resource = new Resource({
            ...req.body,
            uploadedBy: req.user._id // Assuming you have authentication middleware
        });

        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: 'Error creating resource', error: error.message });
    }
};

// Update resource download count
export const incrementDownloadCount = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndUpdate(
            req.params.id,
            { $inc: { downloadCount: 1 } },
            { new: true }
        );

        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: 'Error updating download count', error: error.message });
    }
};

// Delete a resource (admin only)
export const deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resource', error: error.message });
    }
}; 