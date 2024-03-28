

const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault(); // Prevent data being sent when hit "submit"
  const login = formElement.elements.login.value; // Based on what user enters in the form
  fetch(`https://api.github.com/users/${login}`) // Searches API based on user form input
    .then(response => response.json())
    .then(user => {
      // Get user picture from API
      const userPic = document.createElement("img");
      userPic.src = user.avatar_url;
      userPic.style.height = "150px"; // Set default height to 150px
      userPic.style.width = "150px";
      
      // Get user's name from API
      const userName = document.createElement("div");
      userName.textContent = user.name;
      
      // Get user's blog website from API
      const userBlog = document.createElement("a");
      userBlog.href = user.blog;
      userBlog.textContent = userBlog.href;

      // Get user's account creation date from API
      const userCreate = document.createElement("a");
      userCreate.textContent = user.created_at;


      // Add info on the page
      const userInfo = document.getElementById("userinfo");
      userInfo.innerHTML = ""; // Remove previous user info
      userInfo.appendChild(userPic);
      userInfo.appendChild(userName);
      userInfo.appendChild(userBlog);
      userInfo.appendChild(userCreate);
    })
    .catch(err => {
      console.error(err.message);
    });
});