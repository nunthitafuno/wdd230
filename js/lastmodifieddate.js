const lastvisiting = document.lastModified;
document.getElementById("outcome").textContent = "Last Updated: " + lastvisiting;
const currentYear = new Date();
document.getElementById("Year").textContent = currentYear.getFullYear();
