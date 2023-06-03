document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";
//to get data from local storage
window.addEventListener("load", function loadCodeFromLocalStorage() {
    var html = localStorage.getItem("htmlCode");
    document.getElementById("htmlCode").value = html;
    var css = localStorage.getItem("cssCode");
    document.getElementById("cssCode").value = css;
    var js = localStorage.getItem("jsCode");
    document.getElementById("jsCode").value = js;
    showPreview();
});

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  localStorage.setItem('htmlCode', htmlCode);
  var css = document.getElementById("cssCode").value;
  localStorage.setItem('cssCode', css);
  var cssCode = "" + css + "";
  var js = document.getElementById("jsCode").value;
  localStorage.setItem('jsCode', js);
  var jsCode = "" + js + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function showResult() {}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
