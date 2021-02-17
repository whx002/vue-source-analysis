import arrayMethods from './arrayMethods.js';
import defineReactive from './defineReactive.js';
import observe from './observe.js';
/**
 * Observer意思是“观察者”，它的功能非常单纯，就是让一个对象的每一个层级都变为响应式的
 * Observer自己不是递归的，但是结合defineReactive()和observe()两个函数，
 * 又能回到这个类，从而形成递归。
 * */
export default class Observer {
    // 类的构造器
    constructor(value) {
        // console.log('进类了！！');
        // 在value身上添加__ob__属性，值是自己，注意this不是表示类，而是表示实例
        // 理论上可以用value.__ob__添加这个属性，但是添加的属性是普通属性
        // 我们要添加一个不可枚举属性
        Object.defineProperty(value, '__ob__', {
            value: this,
            // 这个属性不可枚举
            enumerable: false,
            // 这个属性可以更改
            configurable: true
        });

        // 看看是不是数组
        if (Array.isArray(value)) {
            // 改写原型
            value.__proto__ = arrayMethods;
            // 遍历自己的子元素
            this.walkArray(value);
        } else {
            // 遍历自己的子元素
            this.walk(value);
        }


    }

    walk(value) {
 
        for (let k in value) {
            // 变为响应式的
            defineReactive(value, k);
        }
    }

    walkArray(value) {
        for (let i = 0, l = value.length; i < l; i++) {
            // 变为响应式的，怕当前项是一个对象，所以要observe递归
            observe(value[i]);
        }
    }
};