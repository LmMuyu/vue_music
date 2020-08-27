function throttle(
  func,
  time = 200,
  options = {
    leading: true,
    tariling: false, //是否最后在触发一次节流
    context: null
  }
) {
  let oldDate = new Date(0).getTime();
  let timer = null;

  function _throttle(...args) {
    let newDate = new Date().getTime();

    if (!options.leading) {
      if (timer) return;
      timer = setTimeout(() => {
        func.apply(options.context, args);
        timer = null;
      }, time);
    } else if (newDate - oldDate > time) {
      func.apply(options.context, args);
      oldDate = newDate;
    } else if (options.tariling) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(options.context, args);
      }, time);
    }
  }

  _throttle.cancel = function() {
    oldDate = 0;
    clearTimeout(timer);
    timer = null;
  };

  return _throttle;
}

export default throttle;
