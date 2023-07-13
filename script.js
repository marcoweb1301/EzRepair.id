// LOGIKA SELECT FORM
function daftar() {
  let selectValue = document.querySelector('#daftar').value;
  if (selectValue === 'tukang') {
    window.location.assign('select_tukang.html');
  } else {
    window.location.assign('select_tukangneeder.html');
  }
}
