export const setUrl = (resourceName) => {
    const {
        REACT_APP_PORT_API,
        REACT_APP_URL_API,
        REACT_APP_VERSION_API,
        REACT_APP_ENV,
    } = process.env;
    
    const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${resourceName}`;
    const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
    const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

    return apiURL;
  
}
