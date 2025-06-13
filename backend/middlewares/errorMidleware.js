

const errorMiddleware = async (err, res) => {
    const status = err.status ? err.status : 500;

    if (err) {
        return res.status(status).json({ error: err.message })
    }
};

export default errorMiddleware