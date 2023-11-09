import "../css/app.scss";

const skillsTerminal = document.querySelector("#skills-terminal");
const exitIcon = document.querySelector("#terminal-exit-icon");
exitIcon.addEventListener(
  "click",
  function(e) {
    skillsTerminal.remove();
  },
  false
);

const currentYear = document.querySelector("#current-year");
currentYear.innerHTML = new Date().getFullYear();