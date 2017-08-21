const jsdom = require('jsdom')

const {JSDOM} = jsdom

const dom = new JSDOM(`<!doctype html>
<html>
<body>
    <div id="content">Hello</div>
</body>
</html>`)

global.window = dom.window
global.document = window.document

console.log(document.getElementById('content').innerHTML)