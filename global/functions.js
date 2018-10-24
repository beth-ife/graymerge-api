


/**
 * Function for throwing error
 * */
ThrowError = (err_message, log) => {
    if(log === true){
        console.error(err_message);
    }

    throw new Error(err_message);
};


/**
 *
 * @param res
 * @param message
 * @param data
 * @param code
 * @returns {*}
 * @constructor
 * Function for handling success web
 * responses
 */
SuccessResponse = (res, message, data, code=200) => { // Success Web Response
    let send_data = {
        success:true, message
    };

    if(typeof data === 'object'){
        send_data = Object.assign({data}, send_data);//merge the objects
    }
    /*//set the http status code
    res.statusCode = code;*/

    return res.status(code).json(send_data)
};

