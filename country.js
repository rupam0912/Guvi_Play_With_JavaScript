var data = [];

function fetchdata() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      data = JSON.parse(http.responseText);
      //console.log(data);
      loadData(data);
      
    }
  };
  http.open("GET", "https://restcountries.eu/rest/v2/all", true);
  http.send();
}

function seachme() {
  const box = document.getElementById("searchbox");
  const root = document.getElementById("root");
  root.innerHTML = "";
  var result = data.filter(function(e) {
    return e.name
      .toLowerCase()
      .trim()
      .startsWith(box.value.toLowerCase().trim());
  });
  loadData(result);
}


//formatting it starting character wise
function loadData(data) {
  const rootDiv = document.getElementById("root");
  var ul = document.createElement("ul");
  var inc = "A"
    for(var i=0;i<25;i++){
        const head = document.createElement("li");
        head.innerHTML = "<div>" +"<b>"+ inc +"</b>"+ "</div>";
        ul.appendChild(head)
        var result = data.filter(function(e) {
            return e.name
              .toLowerCase()
              .trim()
              .startsWith(inc.toLowerCase().trim());
          });

          result.forEach(function(element) {
            const li = document.createElement("li");
            li.innerHTML =
              "<div>" + element.name +"</div>";
            ul.appendChild(li);
          });

          inc = String.fromCharCode(inc.charCodeAt(0)+1)
          console.log(inc)
    }

  rootDiv.appendChild(ul);
}
