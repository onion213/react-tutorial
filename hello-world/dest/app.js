'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return React.createElement(
      'h1',
      null,
      'Hello, ',
      formatName(user),
      '!'
    );
  }
  return React.createElement(
    'h1',
    null,
    'Hello, Stranger.'
  );
}

var user = {
  firstName: 'onion',
  lastName: 'onion'
};
var element = getGreeting(user);

ReactDOM.render(element, document.getElementById('app'));