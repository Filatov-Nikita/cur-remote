import EventEmitter from 'events';

class Events extends EventEmitter {
  static run(...args) {
    const instance =  new this(...args);
    return instance
  }

  constructor() {
    this.id = Symbol('');
  }
}
