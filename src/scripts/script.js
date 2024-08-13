document.getElementById('button').addEventListener('click', darkMode)

function darkMode() {
    let text = document.getElementById('button')

    if (text.innerText == 'dark_mode') {
        text.innerText = 'light_mode'
    } else {
        text.innerText = 'dark_mode'   
    }
}