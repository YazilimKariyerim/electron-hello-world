document.addEventListener("DOMContentLoaded", (_) => {
    const button = document.getElementById("button")
    button.addEventListener("click", (_) => {
        window.electronAPI.showMessage();
    });
})
