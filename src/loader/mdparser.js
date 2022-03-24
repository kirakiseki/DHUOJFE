import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

function mdParser(data) {
    let mdit = new MarkdownIt({
        html: false,        // Enable HTML tags in source
        xhtmlOut: false,        // Use '/' to close single tags (<br />).
        breaks: true,        // Convert '\n' in paragraphs into <br>
        langPrefix: 'language-',
        linkify: true,        // Autoconvert URL-like text to links
        typographer: true,
        quotes: '“”‘’',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                        '</code></pre>';
                } catch (__) { }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });
    let result = mdit.render(data)
    return result;
}

// module.exports = mdParser;
export default mdParser;