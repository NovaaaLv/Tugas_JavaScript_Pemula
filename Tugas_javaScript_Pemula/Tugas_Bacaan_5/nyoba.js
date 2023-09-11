function nyoba() {
  var bil = parseInt(document.fform.imasuk.value);
  var hasil = "";
  for (var i = 1; i <= bil; i++) {
    hasil += "Tugas Ke " + i + "\n";
  }
  document.fform.ohasil.value = hasil;
}
