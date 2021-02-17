/**
 * Dep表示依赖，是英语Dependencies的缩写，它是发布者
 */

export default class Dep {
    constructor() {
        // 自己的订阅者，订阅者是Watcher
        this.watchers = [];
    }
    // 添加依赖（订阅），这个函数被getter调用
    depend() {
        if (window.target) {
            this.watchers.push(window.target);
        }
    }
    // 通知，这个函数被setter调用
    notify() {
        for (let i = 0, l = this.watchers.length; i < l; i++) {
            this.watchers[i].update();
        }
    }
}