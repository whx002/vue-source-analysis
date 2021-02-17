import Observer from './Observer.js';
/**
 * observe是观察的意思，函数的目的是看这个对象身上有没有__ob__属性
 * 如果有就返回__ob__
 * 如果没有就调用new Observer()创建出__ob__
 *  */
export default function observe(value) {
    // 如果这个值不是对象，而是普通类型值，就什么都不做
    // 数组也会视为对象，数组是不会被空return的
    // 这句话非常关键！因为是递归的结束
    if (typeof value != 'object') return;

    // 检查这个对象是不是有__ob__属性，如果有就返回__ob__，如果没有就new一个
    if (value.hasOwnProperty('__ob__') && value.__ob__ != undefined) {
        return value.__ob__;
    } else {
        return new Observer(value);
    }
}