//catch all errors in routes

const notFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalURL}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode ===200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectID') {
        statusCode = 404;
        message = 'Resourse not Found';
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export {notFound, errorHandler};