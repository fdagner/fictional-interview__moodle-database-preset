function printDiv() {
  // Diverse Elemente ausblenden und Größe der Grafiken begrenzen
  const style = document.createElement('style');
  style.innerHTML = `
   .photo img {max-width: 8cm;} audio, video, .btn, .icon {display: none !important;} h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
  `;
  document.head.appendChild(style);
  // Inhalt des Elements mit der ID "section-to-print" drucken
  const printContents = document.getElementById('section-to-print').innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  // Druckvorgang auslösen
  window.print();
  // Originalinhalt wiederherstellen und CSS-Regel entfernen
  document.body.innerHTML = originalContents;
  document.head.removeChild(style);
}