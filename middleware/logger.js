const logger = () => {
    return (req, res, next) => {
        const { ip, method, url } = req
        const agent = req.get("User-Agent")
        console.log(`ip: ${ip}, method: ${method}, url: ${url}, agent: ${agent}`)
        next()
    }
}

module.exports = logger;