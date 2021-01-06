token = localStorage.getItem('token');
console.log(`token: ${token}`)

const menu = document.getElementById('menu');
let headerContent = [];

const renderHeader = () => {

}

if (!token) {
    // if user is not logged in
    headerContent.push("index");
    headerContent.push("login");
    headerContent.push("signup");

} else {
    // if user is logged in
    headerContent.push("index");
    headerContent.push("dashboard");
    headerContent.push("logout");

}