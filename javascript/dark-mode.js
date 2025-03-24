const changeButtonTheme = () => {
    var theme = localStorage.getItem('theme');
    if(theme == 'light')
    {
        document.getElementById('darkmodetoggle').innerHTML = '<i style="padding-top: 2%;" class="bi bi-moon"></i>';
    }
    else
    {
        document.getElementById('darkmodetoggle').innerHTML = '<i style="padding-top: 2%;" class="bi bi-sun"></i>';
    }
}

const toggleTheme = () => {
    var theme = localStorage.getItem('theme');
    if(theme == 'light')
    {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('theme'));
        changeButtonTheme();
    }
    else
    {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('theme'));
        changeButtonTheme();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    changeButtonTheme();
})

const setupTheme = () => {
    var theme = localStorage.getItem('theme');

    if(theme != 'dark' && theme != 'light')
    {
        localStorage.setItem('theme', 'light');
    }

    document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('theme'));
}
