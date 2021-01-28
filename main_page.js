/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 

  function removeUser() {
    parent_username = document.getElementById("parent_name").value;
    parent_password = document.getElementById("parent_pass").value;

    localStorage.removeItem("parent_username", parent_username);
    localStorage.removeItem("parent_password", parent_password);

    window.location = "index.html"
  }