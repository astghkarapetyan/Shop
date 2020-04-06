

export const headers = (headerValue) => {
    let token = '' ;//localStorage.getItem(userToken);
    return (!headerValue) ? ({
        'Content-Type': 'application/json'
    }) : (
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Auth': `Bearer ${token}`
        }
    );
};
export const fetchMineStructure = (fetchUrl, method, body, headerValue = false) => {

    let requestParams = {
        method,
        headers: headers(headerValue)
    };
    if (body) {
        requestParams.body = JSON.stringify(body)
    }

    return (fetch(fetchUrl, requestParams)
            .then((response) => (
                    response.json()
                        .then(json => (
                            response.ok ? json : Promise.reject(json)
                        ))
                )
            )
    )
};