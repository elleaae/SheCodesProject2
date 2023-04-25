function explore() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let emoji = prompt("What is your favourite emoji?");

  alert("Thank you " + name + "! We'll get in touch soon! " + emoji);
}
let button = document.querySelector("button");
button.addEventListener("click", explore);
