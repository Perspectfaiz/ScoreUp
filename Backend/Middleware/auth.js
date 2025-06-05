import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        // If no auth header is present, continue as anonymous user
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            req.user = null;
            return next();
        }

        // If auth header is present, verify the token
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        
        req.user = decoded;
        next();
    } catch (error) {
        // If token verification fails, continue as anonymous user
        req.user = null;
        next();
    }
};

export default auth; 