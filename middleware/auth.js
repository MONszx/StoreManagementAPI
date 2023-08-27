const jwt = require('jsonwebtoken');
const JWT_SECRET = 'IAMBATMAN'; // Palitan ng mas secure na secret key

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Kunin ang token mula sa header
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userData = { userId: decodedToken.userId, role: decodedToken.role };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
};