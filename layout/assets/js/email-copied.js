document.getElementById("copyButton").addEventListener("click", function() {
    var email = "manaka.karabo@capaciti.org.za";
    copyToClipboard(email);
    showPopup();
  });
  
  function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  
  function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function() {
      popup.style.display = "none";
    }, 6000);
  }
  