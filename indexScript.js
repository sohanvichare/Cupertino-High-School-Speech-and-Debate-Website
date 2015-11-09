$( document ).ready(function() {

  setTimeout(toast("Remember to sign up for the Soledad Speech Tournament!"),1000);
  setTimeout(toast("Check out our newest blog post about UoP and Gilroy!"),2000);

  function toast(text) {
    Materialize.toast(text,5000);
  }
});
