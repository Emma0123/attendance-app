module.exports = {
    templateResponse: (rc, succes, message, result, error) =>{
        return{
            rc,
            succes,
            message,
            result,
            error
        }
    }
}