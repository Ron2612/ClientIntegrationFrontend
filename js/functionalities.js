if (sessionStorage.getItem('AuthenticationState') === null) {
    window.open("login.html", "_self");
  }
  
  
function showLogs() {
  
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://pacific-oasis-42903.herokuapp.com/logs", requestOptions)
      .then(response => response.text())
      .then(result => {
        var blob = new Blob([result], { type: "text/plain;charset=utf-8" });
        var anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);
        anchor.download = "save.txt";
        anchor.click();
      })
      .catch(error => console.log('error', error));
}