document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
  const download = document.getElementById("downloadCv");
  if (download) download.addEventListener("click", () => alert("A CV PDF has not been added yet. Add your PDF file and link it here to enable downloading."));
});
