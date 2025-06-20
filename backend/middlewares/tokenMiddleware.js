// Middleware to extract and validate Bearer token from Authorization header

const tokenMiddlware = async (req, res, next) => {

    // const authHeader = req.get('Authorization')
    // const token = authHeader && authHeader.split(' ')[1]; 

    const { authorization } = req.headers;

    if (!authorization) {
        return next(new Error('Authorization Token required!'))
    }

    const token = authorization && authorization?.startsWith('Bearer ')
        ? authorization?.replace('Bearer ', '')
        : null;

    if (!token) {
        return next(new Error('unable token !'))
    }
    req.token = token;
    next();
}

export default tokenMiddlware;