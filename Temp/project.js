function getInfo() {
  var parkRequest = new XMLHttpRequest();
  parkRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      document.getElementById("infoDisplay").innerHTML = this.responseText;
      // var jsonResp = JSON.parse(this.responseText);
      // formatPicture(jsonResp);
    }
  };
  parkRequest.open("GET", 
                  "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=JNYAWS2ZETuoa0Qip2UdSflY3evyqacAiEGQKixm", 
                  true);
  parkRequest.send();
}