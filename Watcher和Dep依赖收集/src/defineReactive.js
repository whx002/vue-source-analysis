import Dep from './Dep.js';
import observe from './observe.js';
/**
 * 数据劫持，功能是将obj对象的prop属性变为响应式的
 */
export default function defineReactive(obj, prop, value = obj[prop]) {
    // 每次defineReactive的时候（这个函数是被递归的，所以大量执行的）
    // dep位于getter的闭包中
    const dep = new Dep();
    // 观察一下value，让value也变为响应式的。这里不用判断value是不是对象
    // 因为observe()函数里面判断了
    let childOb = observe(value);

    Object.defineProperty(obj, prop, {
        set(newValue) {
            if (value == newValue) return;
            value = newValue;
            // 在setter中触发依赖
            dep.notify();
        },
        get() {
            // 在getter中收集依赖
            if (window.target) {
                dep.depend();
                if (childOb) {
                    childOb.dep.depend();
                }
            }
            // console.log(window.target, '正在尝试得到' + prop + '值');
            return value;
        }
    });
}