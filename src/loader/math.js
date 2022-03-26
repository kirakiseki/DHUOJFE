import { ElNotification } from 'element-plus'

function loadFile() {
    ElNotification({
        title: 'Info',
        message: 'MathJax is loading...Please wait.',
        type: 'info',
    });
    console.log('MathJax is loading...Please wait.\n'+new Date());
}

function initDone() {
    ElNotification({
        title: 'Success',
        message: 'MathJax initial typesetting complete.',
        type: 'success',
    });
    console.log('MathJax initial typesetting complete.\n'+new Date());
}

function reRenderDone() {
    ElNotification({
        title: 'Success',
        message: 'Expressions have been rerendered.',
        type: 'success',
    });
    console.log('Expressions have been rerendered.\n'+new Date());
}

function rerenderTex() {
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typeset();
    reRenderDone();
}

function mathFind() {
    var body = document.querySelector(".main").textContent;
    // console.log(body);
    if (body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
        if (!window.MathJax) {
            window.MathJax = {
                tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
                startup: {
                    pageReady: () => {
                        return MathJax.startup.defaultPageReady().then(() => {
                            initDone();
                        });
                    }
                }
            };
        }
        else {
            rerenderTex();
        }

        if (!document.querySelector("#mathjax")) {
            loadFile();
            var script = document.createElement('script');
            script.src = 'https://cdn.bootcdn.net/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js';
            document.head.appendChild(script);
            script = document.createElement('script');
            script.src = 'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-chtml.min.js';
            script.id = 'mathjax';
            document.head.appendChild(script);
        }

    }
}

export { mathFind, rerenderTex };