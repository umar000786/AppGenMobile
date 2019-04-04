var request = (function() {
  return {
      sendGetRequest: function(methodName, parameters, apiUrl) {
          return $.ajax({
              url: apiUrl + methodName + parameters,
              type: 'GET',
              dataType: 'json',
          });
      }
  }
}());
