function debounce(
  func,
  time = 500,
  options = {
    leading: true,
    context: null
  }
) {
  let timer = null;

  function _debounce(...agrs) {
    if (timer) {
      clearTimeout(timer);
    }

    if (options.leading && !timer) {
      timer = setTimeout(null, time);
      func.aplly(options.context, agrs);
    } else {
      timer = setTimeout(() => {
        func, apply(options.leading, agrs);
        timer = null;
      }, time);
    }
  }

  _debounce.cancel = function() {
    clearTimeout(timer);
    timer = null;
  };

  return _debounce;
}

export default debounce;
