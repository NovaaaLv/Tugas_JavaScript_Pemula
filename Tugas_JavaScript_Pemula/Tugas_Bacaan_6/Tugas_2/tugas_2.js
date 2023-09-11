function hitung() {
  var a = parseFloat(document.fform.iA.value);
  var b = parseFloat(document.fform.iB.value);
  var c = parseFloat(document.fform.iC.value);

  var d = b * b - 4 * a * c;
  var x = -b / (2 * a);
  var alrt = "";
  var x1 = 0;
  var x2 = 0;

  if (a == 0) {
    alrt = "Bukan Bilangan Kuadrat";
  } else if (d < 0) {
    alrt = "Akar Akarnya Imaginer";
  } else if (d == 0) {
    x1 = -b / (2 * a);
    alrt = "Memiliki Satu Penyelesaian " + x1;
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    alrt = "Memiliki Dua Penyelesaian x1=" + x1 + " dan x2=" + x2;
  }

  document.fform.ox1.value = x1;
  document.fform.ox2.value = x2;
  document.fform.oalrt.value = alrt;
}
