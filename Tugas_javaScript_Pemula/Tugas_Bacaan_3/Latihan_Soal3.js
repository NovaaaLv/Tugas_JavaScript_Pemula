document.write("<Center> <h2>")
document.writeln("Data Mahasiswa <br>")
document.writeln("Universitas Komputer Indonesia ")
document.write("</Center> </h2>")
document.writeln("<hr>")


function tekan() {
  var nimstr = (document.fform.nim.value);
  var namastr = (document.fform.nama.value);
  var kelaminstr = (document.fform.Kelamin.value);
  var agamastr = (document.fform.Agama.value);
  var ket = "";
  var jurusanstr = (document.fform.Jurusan.value);
  var komentarstr = (document.fform.Komentar.value);

  if (fform.Status.checked == true) {
    ket = "Kawin";
  }
  else {
    ket = "Non kawin";
  }

  document.fform.onim.value = nimstr;
  document.fform.onama.value = namastr;
  document.fform.okelamin.value = kelaminstr;
  document.fform.oagama.value = agamastr;
  document.fform.ostatus.value = ket;
  document.fform.ojurusan.value = jurusanstr;
  document.fform.okomentar.value = komentarstr;
}