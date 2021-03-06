function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode =
    "<style>" + document.getElementById("cssCode").value + "</style>";
  var jsCode =
    "<scri" +
    "pt>" +
    document.getElementById("jsCode").value +
    "</scri" +
    "pt>";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

var codenum = 1;
var codeTypes = [htmlCode, cssCode, jsCode];
var codeTypesHeading = ["HTML CODE", "CSS CODE", "JS CODE"];
var codeTypeIndex = 0;
var isStarted = false;

document
  .querySelector("#code-type button")
  .addEventListener("click", function () {
    var themeButton = document.querySelector("#code-type button");
    console.log(themeButton.classList.contains("theme-d"));
    if (themeButton.classList.contains("theme-d")) {
      themeButton.className = "theme-l";
      themeButton.textContent = "Light Mode";
      document.querySelector(".code-instruction").classList.add("dark");
      document.querySelector("#htmlCode").classList.add("dark");
      document.querySelector("#cssCode").classList.add("dark");
      document.querySelector("#jsCode").classList.add("dark");
      document.querySelector("#preview-head").classList.add("dark");
    } else {
      themeButton.className = "theme-d";
      themeButton.textContent = "Dark Mode";
      document.querySelector(".code-instruction").classList.remove("dark");
      document.querySelector("#htmlCode").classList.remove("dark");
      document.querySelector("#cssCode").classList.remove("dark");
      document.querySelector("#jsCode").classList.remove("dark");
      document.querySelector("#preview-head").classList.remove("dark");
    }
  });

function compCode() {
  var currentCodeType = codeTypes[codeTypeIndex];
  if (codenum == currentCodeType.length + 1) {
    if (codeTypeIndex > 2) {
      document.querySelector("div.code-instruction-area").remove();
      document.querySelector("#start-coding").remove();
      document.querySelector("#code-type").remove();
      var finish = document.createElement("H3");
      finish.innerHTML = "Congratulations!! You have made a tic tac toe game.";
      document.querySelector("div.code-instruction-area").appendChild(finish);
      document
        .querySelector("div.code-instruction-area h3")
        .classList.add("finish");
    } else {
      var btn = document.createElement("BUTTON");
      btn.innerHTML = "NEXT";
      document.querySelector("div.code-instruction-area").appendChild(btn);
      document
        .querySelector("div.code-instruction-area button")
        .classList.add("next-btn");
      document
        .querySelector("div.code-instruction-area button")
        .addEventListener("click", function () {
          codeTypeIndex++;
          codenum = 1;
          document.querySelector("div.code-instruction-area").removeChild(btn);
          document.querySelector(
            "div.code-instruction #code-type"
          ).textContent = codeTypesHeading[codeTypeIndex];
          document.querySelector("div.code-instruction-area").innerHTML = "";
          compCode();
        });
    }
  } else {
    if (codenum > 1) {
      document.querySelector("div.code-instruction-area").innerHTML = "";
    }
    for (let i = 0; i < codenum; i++) {
      var p = document.createElement("P");
      p.textContent = currentCodeType[i].code;
      document.querySelector("div.code-instruction-area").appendChild(p);
      if (currentCodeType[i].link) {
        document.querySelector(
          "div.code-instruction-area"
        ).lastChild.innerHTML +=
          "<a id='Qicon' href=" +
          currentCodeType[i].link +
          " target='_blank'><img src='question-mark.png' width='16' height='16'></a>";
      }
    }
  }
}
document.querySelector("#start-coding").addEventListener("click", function () {
  document.querySelector("#start-coding").remove();
  isStarted = true;
  compCode();
});

function replacer(key, value) {
  return value.replace(/\n/g, "").replace(/ /g, "");
}

document
  .querySelector("textarea#htmlCode")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && isStarted) {
      event.preventDefault();
      var userCodeline = document.querySelector("textarea#htmlCode").value;
      var compCodeline = document.querySelector(
        "div.code-instruction-area"
      ).textContent;
      var compCodeline = JSON.stringify(compCodeline, replacer);
      var userCodeline = JSON.stringify(userCodeline, replacer);

      if (compCodeline == userCodeline) {
        codenum++;
        document.querySelector("textarea#htmlCode").classList.remove("wrong");
        compCode();
      } else {
        var classes = document.querySelector("textarea#htmlCode").classList;
        if (!classes.contains("wrong")) {
          classes.add("wrong");
          var lastCode = document.querySelector(
            "div.code-instruction-area"
          ).lastChild;
          lastCode.classList.add("wrong");
        }
      }
    }
  });

document
  .querySelector("textarea#cssCode")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && isStarted) {
      event.preventDefault();
      var userCodeline = document.querySelector("textarea#cssCode").value;
      var compCodeline = document.querySelector(
        "div.code-instruction-area"
      ).textContent;
      var compCodeline = JSON.stringify(compCodeline, replacer);
      var userCodeline = JSON.stringify(userCodeline, replacer);

      if (compCodeline == userCodeline) {
        codenum++;
        document.querySelector("textarea#cssCode").classList.remove("wrong");
        compCode();
      } else {
        var classes = document.querySelector("textarea#cssCode").classList;
        if (!classes.contains("wrong")) {
          classes.add("wrong");
          var lastCode = document.querySelector(
            "div.code-instruction-area"
          ).lastChild;
          lastCode.classList.add("wrong");
        }
      }
    }
  });

document
  .querySelector("textarea#jsCode")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && isStarted) {
      event.preventDefault();
      var userCodeline = document.querySelector("textarea#jsCode").value;
      var compCodeline = document.querySelector(
        "div.code-instruction-area"
      ).textContent;
      var compCodeline = JSON.stringify(compCodeline, replacer);
      var userCodeline = JSON.stringify(userCodeline, replacer);

      if (compCodeline == userCodeline) {
        codenum++;
        document.querySelector("textarea#jsCode").classList.remove("wrong");
        compCode();
      } else {
        var classes = document.querySelector("textarea#jsCode").classList;
        if (!classes.contains("wrong")) {
          classes.add("wrong");
          var lastCode = document.querySelector(
            "div.code-instruction-area"
          ).lastChild;
          lastCode.classList.add("wrong");
          lastCode.innerHTML +=
            "<a id='Qicon' href='https://www.javatpoint.com/javascript-tutorial' target='_blank'><img src='question-mark.png' width='16' height='16'></a>";
        }
      }
    }
  });
