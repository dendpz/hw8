document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  
  const htmlTable = document.getElementById('keyValue');

  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  //const userPay = document.getElementById("pmethod").value;

  console.log(userName);
  console.log(userEmail);
 // console.log(userPay);
//Having a hard time getting info, then displaying on table...
});