fetch('navbar.html')
  .then(response => response.text())
  .then(data => document.getElementById('navbar').innerHTML = data)
  .catch(error => console.error('Error loading navbar:', error));

  fetch('footer.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer').innerHTML = data)
  .catch(error =>console.error('Error loading Footer:' , error))

  
          //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}