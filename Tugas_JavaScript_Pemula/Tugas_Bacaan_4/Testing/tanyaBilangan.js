function tekan() {
  var bil = parseFloat(document.fform.Bilangan.value);
  var jenis = "";
  if (isNaN(bil)) {
    alert("Anda Belum Memasukan Bilangan !");
  }
  else {
    if (bil > 0) {
      jenis = "Adalah Bilangan Positif";
    }
    else if (bil < 0) {
      jenis = "Adalah Bilangan Negatif";
    }
    else {
      jenis = "Adalah Nol";
    }
    alert(bil + " " + jenis);
  }
}
