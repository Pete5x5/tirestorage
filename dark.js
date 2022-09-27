const themes = ["light", "dark"];
const button = document.querySelector("#theme-switcher");

const getThemeCurrent = () => document.documentElement.dataset.theme;
const getThemeNext = () => {
  const themeCurrent = getThemeCurrent();
  const indexThemeCurrent = themes.indexOf(themeCurrent);
  return themes[(indexThemeCurrent + 1) % themes.length];
};

// const updateIcon = () => {
//   const themeCurrent = getThemeCurrent();
//   document
//     .querySelector(\`#icon-theme-\${themeCurrent}\`)
//     .classList.add("hidden");
//   const themeNext = getThemeNext();
//   document
//     .querySelector(\`#icon-theme-\${themeNext}\`)
//     .classList.remove("hidden");
// };

button.addEventListener("click", () => {
  const themeNext = getThemeNext();
  document.documentElement.dataset.theme = themeNext;
  localStorage.setItem("theme", themeNext);
  updateIcon();
});