// Initialize AOS (Animate On Scroll)
AOS.init();

// دالة إنشاء PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const title = document.getElementById("lessonTitle").value;
  const goals = document.getElementById("lessonGoals").value;
  const content = document.getElementById("lessonContent").value;

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

  doc.save(`${title || 'درس'}.pdf`);
}
// تفعيل مكتبة AOS
AOS.init();

// تأكد من أن jsPDF تم تحميلها
window.onload = function () {
  const { jsPDF } = window.jspdf;

  // جعل الدالة متاحة عالمياً
  window.generatePDF = function () {
    const title = document.getElementById("lessonTitle").value;
    const goals = document.getElementById("lessonGoals").value;
    const content = document.getElementById("lessonContent").value;

    const doc = new jsPDF();

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

    doc.save(`${title || 'درس'}.pdf`);
  };
};
