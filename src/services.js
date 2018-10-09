function processCallback(source) {
  if (source.location.search || source.location.hash) {
    const query = parseQueryString(source.location.search.substring(1).replace(/\/$/, ''));
    const hash = parseQueryString(source.location.hash.substring(1).replace(/[\/$]/, ''));
    let params = objectExtend({}, query);
    params = objectExtend(params, hash);

    if (params.error) {
      throw new Error(params.error);
    } else {
      return params;
    }
  } else {
    throw new Error('OAuth redirect has occurred but no query or hash parameters were found.');
  }
}

const services = {
  processPageCallback: () => {
    return processCallback(window);
  },
  processCallback: processCallback
}

export default services;
