var res = localStorage.getItem("type");
console.log(res);
switch (res) {
  case "action":


    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/action.mp3";
    para.download = "action"
    document.getElementById("pop1").appendChild(para);


    break;
  case "fantasy":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/fantasy.mp3";
    para.download = "fantasy.mp3"
    document.getElementById("pop1").appendChild(para);

    break;
  case "horror":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/horror.mp3";
    para.download = "horror.mp3"
    document.getElementById("pop1").appendChild(para);
    break;
  case "romance":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/romance.mp3";
    para.download = "romance.mp3"
    document.getElementById("pop1").appendChild(para);
    break;
  case "scifi":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/scifi.mp3";
    para.download = "scifi.mp3"
    document.getElementById("pop1").appendChild(para);
    break;

  default:
    // code block
}
