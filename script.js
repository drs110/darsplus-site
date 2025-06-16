// Initialize AOS (Animate On Scroll)
AOS.init();
<!-- في نهاية body داخل index.html -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="script.js"></script>
async function generatePDF() {
  const { jsPDF } = window.jspdf;

  const title = document.getElementById("lessonTitle").value;
  const goals = document.getElementById("lessonGoals").value;
  const content = document.getElementById("lessonContent").value;

  const doc = new jsPDF();

  doc.setFont("Helvetica");
  doc.setFontSize(16);
  doc.text(`عنوان الدرس: ${title}`, 10, 20);

  doc.setFontSize(14);
  doc.text("أهداف الدرس:", 10, 35);
  doc.setFontSize(12);
  doc.text(goals, 10, 45);

  doc.setFontSize(14);
  doc.text("محتوى الدرس:", 10, 65);
  doc.setFontSize(12);
  doc.text(content, 10, 75);
async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const title = document.getElementById("lessonTitle").value;
  const goals = document.getElementById("lessonGoals").value;
  const content = document.getElementById("lessonContent").value;

  doc.setFontSize(16);
  doc.text(`عنوان الدرس: ${title}`, 10, 20);
  doc.setFontSize(14);
  doc.text(`أهداف الدرس:`, 10, 35);
  doc.setFontSize(12);
  doc.text(goals, 10, 45);
  doc.setFontSize(14);
  doc.text(`محتوى الدرس:`, 10, 65);
  doc.setFontSize(12);
  doc.text(content, 10, 75);

  doc.save(`${title || 'درس'} .pdf`);
}

  doc.save(`${title}.pdf`);
}
