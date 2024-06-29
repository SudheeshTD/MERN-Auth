import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async(req,res,next) => {
    let token;
    token = req.cookies.jwt;

    if(token) {
        // Check if the token exists. This ensures that the token is present before proceeding with verification.
        try {
            // Attempt to verify the token and decode its payload. The secret key used for verification is retrieved from environment variables.
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
            // Find the user in the database based on the userId from the decoded token payload.
            // Exclude the password field from the returned user document for security reasons.
            req.user = await User.findById(decoded.userId).select('-password');
    
            // Call the next middleware function in the stack. This allows the request to proceed if the token is valid and the user is found.
            next();
        } catch (error) {
            // Handle errors that occur during token verification or user retrieval.
            res.status(401);
            throw new Error('Not authorized, Invalid Token');
        }
    } else {
        // Handle the case where no token is provided in the request.
        res.status(401);
        throw new Error('Not authorized, no Token');
    }


})

export { protect };