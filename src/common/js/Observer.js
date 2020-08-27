class Observer {
  constructor() {
    this.bus = {};
  }
  //发布
  trigger(type, ...args) {
    let list = this.bus[type];
    list.forEach(itme => {
      itme(args);
    });
  }
  //订阅
  on(type, fn) {
    let key = this.bus[type];
    key === undefined ? (this.bus[key] = [fn]) : key.push(fn);
  }
  //取消订阅
  off(type, fn) {
    let key = this.bus[type];
    if (!key) return;

    let index = key.findIndex(itme => itme === fn);
    key.splice(index, 1);

    if (key.length === 0) delete this.bus[type];
  }
  //只发布一次
  once(type, fn) {
    let oneEvent = args => {
      fn(args);
      this.off(type, oneEvent);
    };
    this.on(type, oneEvent);
  }
}
