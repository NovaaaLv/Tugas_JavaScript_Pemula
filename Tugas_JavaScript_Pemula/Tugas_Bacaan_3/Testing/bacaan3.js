function radio_box(form) {
  var ket = ""
  if (form.wanita.checked == true) {
    ket = "Wanita"
  } else {
    ket = "Pria"
  }
  alert("Jenis Kelamin Anda " + ket)
}
