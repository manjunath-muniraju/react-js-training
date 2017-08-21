const jsdom = require('jsdom')

const {JSDOM} = jsdom

const dom = new JSDOM(`<!doctype html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
    <div id="content"></div>
    <script>
        $('#content').text('Hello');
        console.log($('#content').html())
    </script>
</body>
</html>`, {runScripts: "dangerously", resources: 'usable'})

global.window = dom.window
global.document = window.document

var assert = require('assert');

describe('welcome page content', () => {
    it('should contain Hello in content div', (done) => {
    	window.addEventListener('load', () => {
    		assert.equal(document.getElementById('content').innerHTML, 'Hello')
    		done();
		})
   	})
})