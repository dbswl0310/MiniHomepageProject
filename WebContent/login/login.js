const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".email");
const loginpassword = document.querySelector(".password");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    window.location.href="/index.html" // 로그인 성공시 메인
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    window.location.href="/index.html" // 로컬스토리지에 id존재하면 메인
}