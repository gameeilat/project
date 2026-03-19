document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");
  if (!container) return;

  // find project root automatically
  const depth = location.pathname.split("/").length - 2;
  const prefix = depth > 0 ? "../".repeat(depth - 1) : "";

  fetch(prefix + "sidebar.html")
    .then(res => {
      if (!res.ok) throw new Error("Sidebar not found"); //response
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;

      // fix sidebar links relative to current page depth
      const links = container.querySelectorAll("a[href]");
      links.forEach(link => {
        const href = link.getAttribute("href");

        // skip anchors, absolute links, mailto, tel, js
        if (
          !href ||
          href.startsWith("#") ||
          href.startsWith("http") ||
          href.startsWith("/") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:") ||
          href.startsWith("javascript:")
        ) {
          return;
        }

        link.setAttribute("href", prefix + href);
      });

      document.dispatchEvent(new Event("sidebar-loaded"));
    })
    .catch(err => {
      console.error("Sidebar load failed:", err);
    });
});