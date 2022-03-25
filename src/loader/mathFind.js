import { ElNotification } from 'element-plus'

function loadFile() {
    ElNotification({
        title: 'Info',
        message: 'MathJax is loading...Please wait.',
        type: 'info',
    })
}

function initDone() {
    ElNotification({
        title: 'Success',
        message: 'MathJax initial typesetting complete.',
        type: 'success',
    })
}


function mathFind() {
    var body = document.querySelector(".main").textContent;
    console.log(body);
    if (body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
        if (!window.MathJax) {
            window.MathJax = {
                tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
                startup: {
                    pageReady: () => {
                        return MathJax.startup.defaultPageReady().then(() => {
                            console.log('MathJax initial typesetting complete');
                            initDone();
                        });
                    }
                }
            };
        }
        loadFile();
        var script = document.createElement('script');
        script.src = 'https://cdn.bootcdn.net/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js';
        document.head.appendChild(script);
        script = document.createElement('script');
        script.src = 'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-chtml.min.js';
        document.head.appendChild(script);
    }
}
export default mathFind;