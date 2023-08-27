module.exports = (allowedRoles) => {
    return (req, res, next) => {
        // Logic to check if user role is in allowedRoles
        const userRole = req.user.Role; // Get user role from token payload
        if (allowedRoles.includes(userRole)) {
            next(); // User has the required role, proceed
        } else {
            res.status(403).json({ error: 'Access denied' }); // User does not have the required role
        }
    };
};