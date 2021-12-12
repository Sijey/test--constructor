'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.body.firstChild.remove();

var App = function App() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      liked = _React$useState2[0],
      setLiked = _React$useState2[1];

  if (liked) {
    return React.createElement(
      'p',
      { className: 'text-field' },
      '\u0411\u0443\u0434\u0443\u0449\u0438\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440'
    );
  }

  return React.createElement(
    'button',
    { className: 'main-button', onClick: function onClick() {
        return setLiked(true);
      } },
    'Like'
  );
};

var domContainer = document.querySelector('#constructor');
ReactDOM.render(React.createElement(App, null), domContainer);