'use strict';

var name = 'onion';
var element = React.createElement(
    'h1',
    null,
    'Hello, ',
    name,
    '!'
);

ReactDOM.render(element, document.getElementById('app'));