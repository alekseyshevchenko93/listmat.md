
DataService.$inject = ['$http'];

export default function DataService($http) {
  console.log('hi from DataService');

  const getCategories = function() {
    return $http.get('/api/categories');
  }

  const getCategoryById = function(categoryId) {
    return $http.get(`/api/categories/${categoryId}`);
  }

  const getProductsByCategoryId = function(categoryId) {
    return $http.get(`/api/categories/${categoryId}/products`);
  }

  const getProductsByFullTextSearch = function(query) {
    return $http.get(`/api/products?q=${query}`);
  }

  return {
    getCategories,
    getCategoryById,
    getProductsByCategoryId,
    getProductsByFullTextSearch
  }
};

