const asyncHandler = (fn) => async (req, res, next) => {
    try {
        
    } catch (err) {
        console.log(err)
        res.status(err.code || 500).json({
            success: false,
            message: err.message,
        });
    }
};


module.exports = asyncHandler;