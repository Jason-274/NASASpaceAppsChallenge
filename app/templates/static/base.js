document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebarButton = document.getElementById("toggle-sidebar-button");

    toggleSidebarButton.addEventListener("click", function () {
        if (sidebar.style.transform === "translateX(-250px)") {
            sidebar.style.transform = "translateX(0)";
        } else {
            sidebar.style.transform = "translateX(-250px)";
        }
    });
});
