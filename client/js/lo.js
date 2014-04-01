var lo = {
  ajax: function(url, type, data, callback){
    var r = new XMLHttpRequest();
    //r.open("POST", "webservice", true);
    r.open(type, url, true);
    r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return; 
      console.log(r.responseText);
      if(callback){
        callback(r.responseText);
      }
    };
    r.send(data);
  }
};
