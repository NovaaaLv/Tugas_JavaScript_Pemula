function hitung() {
  var saldo = parseInt(document.fform.isaldo.value);
  var bunga = parseFloat(document.fform.ibunga.value);
  var waktu = parseFloat(document.fform.iwaktu.value);
  var hasil = saldo;
  var text = "";

  for (var i = 1; i <= waktu; i++) {
    hasil = (hasil + (hasil * (bunga / 100)));
    text += "Saldo Bulan " + i + ": Rp. " + hasil.toFixed(2) + "\n"; // Menggunakan toFixed(2) agar angka desimal memiliki 2 digit
  }
  document.fform.ohasil.value = text;
}
