(function(win) {
    // 获取的系统全局私有常量
    const userAgent = win.navigator.userAgent.toLowerCase();
    const objType = {
        obj: "[object Object]",
        arr: "[object Array]",
        reg: "[object RegExp]",
        math: "[object Math]",
        date: "[object Date]",
        fun: "[object Function]",
        num: "[object Number]",
        str: "[object String]",
        null: "[object Null]",
        undefined: "[object Undefined]",
        err: "[object Error]",
    }

    // 基础工具函数库
    let base = {}

    // 判断数据是否为数字(含隐身转换)
    base.isNum = function(v) {
        v = String(v);
        return !(isNaN(v) || v == "")
    }
    // 获取浏览器相关信息
    base.browser = {
    	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
    	webkit: /webkit/.test(userAgent),
    	opera: /opera/.test(userAgent), // untested
    	msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
    	mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent),
        msafari: /apple.*mobile.*safari/.test(userAgent)
    }
    // 通过默认的toString函数判断对象类型
    base.is = function(type, v) {
        return Object.prototype.toString.call(v) === (objType[type] || type);
    }
    // 将json数据转成url参数，对非英文数据进行编码
    base.toQs = function(ops) {
        let params = [];
        for(var key in ops) {
            var str = encodeURIComponent(key) + '=';
            var value = this.is('arr', ops[key]) ? ops[key].join(',') : ops[key];
            str += encodeURIComponent(value);
            params.push(str)
        }
        return params.join('&');
    }
    // 将url参数转换成json数据，对非英文编码进行解码
    base.getParams = function(params) {
        let ops = {};
        const pArr = params.replace(/^\?/, "").split("&");
        pArr.forEach(p => {
            const pArr = p.split("=");
            ops[pArr[0]] = decodeURIComponent(pArr[1])
        })
        return ops;
    }
    // 将复杂层级较深的json数据展开, 只展开对象。
    base.unfoldJson = function(json) {
        let unfold = {};

        (function redo(obj, k) {
            for (const key in obj) {
                const ele = obj[key];
                if (ele.constructor === Object) {
                    redo(ele, k ? (k + "." + key) : key)
                } else {
                    unfold[k ? (k + "." + key) : key] = ele
                }
            }
        })(json)
        
        return unfold
    }
    // 将展开的json数据恢复成正常的数据结构，只针对对象
    base.foldJson = function(json) {
        let fold = {};

        for (const key in json) {
            const keyArr = key.split(".");
            (function redo(i, obj) {
                obj = obj || fold
                if (i == (keyArr.length - 1)) {
                    obj[keyArr[i]] = json[key]
                } else {
                    obj[keyArr[i]] = obj[keyArr[i]] || {}
                    redo(i+1, obj[keyArr[i]])
                }
            })(0)
        }

        return fold
    }

    win.basePack = base

})(this)