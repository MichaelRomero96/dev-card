import React from "react";

const Toggleee = () => {
    const botn = document.querySelector("#btn");

    botn.addEventListener("click", open);
    botn.addEventListener("click", close);
};
function open() {
    const sidebar = document.querySelector("#sidebar");

    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden");
        sidebar.classList.add("no-hidden");
        return;
    }
}

function close() {
    const sidebar = document.querySelector("#sidebar");

    if (sidebar.classList.contains("no-hidden")) {
        sidebar.classList.remove("no-hidden");
        sidebar.classList.add("hidden");
        return;
    }
}

export default Toggleee;
