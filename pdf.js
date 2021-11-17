// JavaScript source code
function converHTMLFileToPDF() {
    var doc = new jsPDF();

    var html = document.getElementById("main").innerText;

    doc.text(10, 10, html);

    doc.save('MiaMudzingwa_SE_2022.pdf');
}
    
    
