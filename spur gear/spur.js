function toggleView() {
  const explain = document.getElementById("explainView");
  const model = document.getElementById("modelView");
  const text = document.getElementById("toggleText");

  const isExplain = explain.style.display !== "none";

  explain.style.display = isExplain ? "none" : "block";
  model.style.display = isExplain ? "block" : "none";

  text.textContent = isExplain ? "חזרה להסבר" : "מודל תלת־ממד";
}
