document.addEventListener("DOMContentLoaded", () => { //waits for the page to load before running the code
  const container = document.getElementById("sidebar-container");
  if (!container) return; //doesn't run if there is no container, safty check

  // find project root automatically
  const depth = location.pathname.split("/").length - 2; //tales the amounts of returns and subtracts 2
  const prefix = depth > 0 ? "../".repeat(depth - 1) : ""; //returns it back to the root file

  fetch(prefix + "sidebar.html")
    .then(res => {
      if (!res.ok) throw new Error("Sidebar not found");
      return res.text();//safty check
    })
    .then(html => {
      container.innerHTML = html;
      document.dispatchEvent(new Event("sidebar-loaded"));
    })
    .catch(err => {
      console.error("Sidebar load failed:", err);
    });
}
 );
