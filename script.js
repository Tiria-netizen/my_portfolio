function searchContent() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    // Define keyword-to-page mapping
    let pages = {
        "home": "index.html",
        "about": "about.html",
        "projects": "projects.html",
        "skills": "skills.html",
        "contact": "contact.html",
        "education": "education.html"
    };

    let found = false;

    for (let keyword in pages) {
        if (input.includes(keyword)) {
            window.location.href = pages[keyword]; // Redirect to the correct page
            found = true;
            break;
        }
    }

    if (!found && input !== "") {
        alert("No matching section found.");
    }
}
