!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.startBtn.setAttribute("disabled","disabled"),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.4e05d6c0.js.map