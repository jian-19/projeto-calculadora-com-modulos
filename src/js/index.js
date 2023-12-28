import calculate from "./calculate.js"
import copytoclipboard from "./copytoclipboard.js"
import { handlerButtonPress, handlerTyping, handlerclearButton } from "./keyhandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handlerButtonPress)
})

document.querySelector('#clear').addEventListener('click', handlerclearButton)

document.querySelector('#input').addEventListener('keydown', handlerTyping)

document.querySelector('#equal').addEventListener('click', calculate)

document.querySelector("#copyToClipboard").addEventListener("click", copytoclipboard)

document.querySelector('#themeSwitcher').addEventListener('click', themeSwitcher)

