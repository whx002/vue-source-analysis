/**
 * 监控器类，它是一个很抽象很抽象的类
 * 好比“菜鸟驿站”，一统了快递主人是否在家的情况
 */

export default class Watcher {
    // 对象，键名，回调函数
    constructor(o, key, callback) {
        this.o = o;
        this.key = key;
        this.callback = callback;
        // 依赖收集，让全局target属性设置为这个实例
        window.target = this;
        // 一定要触碰一下这个数据，才能触发getter，这句话就叫做touch
        this.value = this.o[this.key];
    }
    update() {
        // 触发自己的回调函数
        const value = this.o[this.key];

        // 如果value变化了，或者value是对象
        if (value !== this.value || typeof value == 'object') {
            this.value = value;
            // 调用回调函数了，就相当于组件更新了
            this.callback.call(this.target, value);
        }
    }
}