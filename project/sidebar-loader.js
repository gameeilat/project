document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");
  if (!container) return;

  // find project root automatically
  const depth = location.pathname.split("/").length - 2;
  const prefix = depth > 0 ? "../".repeat(depth - 1) : "";

  fetch(prefix + "sidebar.html")
    .then(res => {
      if (!res.ok) throw new Error("Sidebar not found");
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      document.dispatchEvent(new Event("sidebar-loaded"));
    })
    .catch(err => {
      console.error("Sidebar load failed:", err);
    });
});
