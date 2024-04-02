function getRoot() {
    let currentUrl = window.location.href;
    let urlParts = currentUrl.split('/');
    urlParts.pop();
    let rootDir = urlParts.join('/') || '/';
    console.log("Root: " + rootDir);
    return rootDir;
}

window.addEventListener("load", (e) => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = getRoot() + '/styles/styles.css';
})