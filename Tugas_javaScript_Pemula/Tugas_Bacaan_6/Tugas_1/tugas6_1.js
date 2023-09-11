document.write("<h2> <center> WAKTU SELAMAT </h2> </center>")

var waktu = new Date;
var jam = waktu.getHours();
var pesan

if (jam >= 0 && jam < 12) {
  pesan = "Selamat Pagi !";
}
else if (jam >= 13 && jam < 18) {
  pesan = "Selamat Siang !";
}
else if (jam >= 18 && jam < 0) {
  pesan = "Selamat Malam !";
}

confirm(pesan);
