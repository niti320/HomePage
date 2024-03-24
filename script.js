function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.style.width === "0px" || searchBar.style.width === "") {
        searchBar.style.padding = "5px 10px ";
        searchBar.style.width = "140px";
    } else {
        searchBar.style.width = "0px";
        searchBar.style.padding = "5px 0px";

    }
}
function toggle_menu() {
    var lis = document.getElementById("lis");
    lis.classList.toggle("show");
    
}

function handleResize() {
    var lis = document.getElementById("lis");
    if (window.innerWidth > 1100) {
        lis.classList.remove("show");
    }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Call handleResize initially
handleResize();

function toggleVisibility(img) {
    var info = img.nextElementSibling; // Get the next sibling (info div)
    var imagesDiv = img.parentElement; // Get the parent element (images div)
    
    // Toggle the 'show' class on the info div
    info.classList.toggle('show');
    
    // Toggle the 'clicked' class on the images div
    imagesDiv.classList.toggle('clicked');
}
function toggleCartMessage() {
        var message = document.getElementById("cartMessage");
        message.classList.toggle("show");
    }