function radio_box(form) {
  var ket = ""
  var ket1 = ""
  if (form.bola.checked == true) {
    ket = "Nonton Bola"
  }

  if (form.tv.checked == true) {
    ket1 = " Nonton Tv"
  }
  alert("Hobby anda " + ket + "" + ket1)
}