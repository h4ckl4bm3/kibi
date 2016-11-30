define(function (require) {
  return function FetchStrategyForSavedObject(Promise, savedObjectsAPI) {
    return {
      clientMethod: 'mget',
      client: savedObjectsAPI,

      /**
       * Flatten a series of requests into as ES request body
       * @param  {array} requests - an array of flattened requests
       * @return {Promise} - a promise that is fulfilled by the request body
       */
      reqsFetchParamsToBody: function (reqsFetchParams) {
        return Promise.resolve({
          docs: reqsFetchParams
        });
      },

      /**
       * Sets the client request options.
       */
      setClientOptions: () => ({}),

      /**
       * Fetch the multiple responses from the ES Response
       * @param  {object} resp - The response sent from Elasticsearch
       * @return {array} - the list of responses
       */
      getResponses: function (resp) {
        return resp.docs;
      }
    };
  };
});