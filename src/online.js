const path = location.pathname;
console.log(path);
const reg = /\.(png|jpg|jpeg|gif|webp)$/i;

if (reg.test(path) || document.contentType.startsWith("image")) {
    console.log("开始预览");
    document.head.insertAdjacentHTML(
        "beforeend",
        `<link href="https://cdn.bootcdn.net/ajax/libs/viewerjs/1.11.5/viewer.css" rel="stylesheet">`,
    );

    const script = loadScript(
        "https://cdn.bootcdn.net/ajax/libs/viewerjs/1.11.5/viewer.js",
    );

    script.onload = function () {
        console.log("加载好了");
        const img = document.querySelector("img");
        new Viewer(img, {
            zoomRatio: 0.5,
            toolbar: false,
            navbar: false,
            initialCoverage: 1,
            transition: false,
        }).show([true]);
    };
}
function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
    return script;
}
