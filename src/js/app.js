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
