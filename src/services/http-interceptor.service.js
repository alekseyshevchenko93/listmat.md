HttpInterceptor.$inject = ['API_URL'];

export default function HttpInterceptor(API_URL) {
  return {
    request: function(config) {
      // console.log('intercepting request', config);

      if (config.url.includes('api')) {
        config.url = API_URL + config.url;
      }

      return config;
    }
  }
}