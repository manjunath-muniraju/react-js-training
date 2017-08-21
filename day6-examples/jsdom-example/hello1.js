const jsdom = require('jsdom')

const {JSDOM} = jsdom

const dom = new JSDOM(`<!doctype html>
<html>
<body>
    <div id="content"></div>
    <script>
        document.getElementById('content').innerHTML = 'Hello';
    </script>
</body>
</html>`, {runScripts: "dangerously"})

global.window = dom.window
global.document = window.document

console.log(document.getElementById('content').innerHTML)