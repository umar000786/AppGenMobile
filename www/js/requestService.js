  function sendGetRequest(methodName,parameters,apiUrl)
  {
   return $.ajax({
        url: apiUrl+methodName+parameters,
        type: 'GET',
        dataType: 'json',
      });
  }