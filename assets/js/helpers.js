function getBaseUrl () {
    let url = new URL(window.location.href);
    let urlParts = url.pathname.split('/');
    if (urlParts.length > 2) {
        let projectRoot = urlParts[1];
        if (projectRoot.trim() !== "") {
            return url.origin + `/${projectRoot}`;
        }
    }
    return url.origin;
}