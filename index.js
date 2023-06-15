const title = document.title;
window.addEventListener("blur", () => {
    document.title = ` Come Back Please !! 😢`
})
window.addEventListener("focus", () => {
    document.title = title
})






const pass = document.getElementById("password");
const butt = document.getElementById("mybutton");
const msg = document.getElementById("msg");

const bodElement = document.querySelector('.main');

butt.addEventListener("click", () => {
    const password = pass.value;
    let c = 0;

    if (password.length > 8) {
        c += 1;
    }
    if (/[A-Z]/.test(password)) {
        c += 1;
    }
    if (/[a-z]/.test(password)) {
        c += 1;
    }
    if (/[0-9]/.test(password)) {
        c += 1;
    }
    if (/[!@#$%^&*()\-+]/.test(password)) {
        c += 1;
    }
    if (c === 5) {
       bodElement.style.transition = "background-color 0.5s ease-in-out";
        bodElement.style.background = "#98FB98";
        msg.innerHTML = `<div id="ans"><h3 style="color: green;">Strong Password</h3></div>`;
        
        // Revert back to normal color after 5 seconds
        setTimeout(() => {
            bodElement.style.transition = "background-color 0.5s ease-in-out";
            bodElement.style.background = "linear-gradient(#fafafa, #faf)";
            // msg.innerHTML = "";
        }, 3000);
    } else {
         bodElement.style.transition = "background-color 0.5s ease-in-out";
        bodElement.style.background = "red"; // Change back to the initial background color
        msg.innerHTML = `<div id="ans"><h3 style="color: red;">Weak Password</h3></div>`;
        setTimeout(() => {
            bodElement.style.transition = "background-color 0.5s ease-in";
            bodElement.style.background = "linear-gradient(#fafafa, #faf)";
            // msg.innerHTML = "";
        }, 3000);
    }
});
