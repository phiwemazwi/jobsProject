document.getElementById("downloadButton").addEventListener("click", function () {
    downloadPDF();
    showPopuping();
});

function downloadPDF() {
    var fileUrl = "assets/docs/Molatelo Karabo Manaka CV.pdf";
    var fileName = "Molatelo Karabo Manaka CV.pdf";

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

function showPopuping() {
    var popup1 = document.getElementById("popup1");
    popup1.style.display = "block";
    setTimeout(function () {
        popup1.style.display = "none";
    }, 6000);
}
