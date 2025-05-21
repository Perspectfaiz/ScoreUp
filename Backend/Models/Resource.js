import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['PDF', 'Video']
    },
    tags: [{
        type: String,
        trim: true
    }],
    fileUrl: {
        type: String,
        required: true,
        trim: true
    },
    publicId: {
        type: String,
        required: true,
        trim: true
    },
    thumbnailUrl: {
        type: String,
        trim: true,
        default: ''
    },
    downloadCount: {
        type: Number,
        default: 0
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Resource', resourceSchema); 