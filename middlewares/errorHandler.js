export const errorHandler = (err, _, res, next) => {
    console.log(err)
    const statusCode = err.statusCode || 500
    const msg = err.message || 'Internal Server Error'

    res.status(statusCode).json({ msg })
}