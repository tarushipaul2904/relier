function addUser()
{
    parent_username = document.getElementById("parent_name").value;
    parent_password = document.getElementById("parent_pass").value;

    localStorage.setItem("parent_username", parent_username);
    localStorage.setItem("parent_password", parent_password);

    window.location = "main_page.html";
}