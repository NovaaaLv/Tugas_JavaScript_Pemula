function masukannim() {
  if (document.f.inim.value == "") {
    alert("anda belum memasukkan nim");
  }
}
function masukannama() {
  if (document.f.inama.value == "") {
    alert("anda belum memasukkan nama");
  }
}
function masukanalamat() {
  if (document.f.ialamat.value == "") {
    alert("anda belum memasukkan alamat");
  }
}
function terimakasih() {
  if ((document.f.inim.value != "") && (document.f.inama.value != "") &&
    (document.f.ialamat.value != "")) {
    alert("Terima Kasih Telah mengisi Data");
  }
  else
    alert("Mohon Data Dilengkapi");
}   
