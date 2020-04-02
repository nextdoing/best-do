(function(win) {
    // 规则list
    var rule = {
        "isNonEmpty": {
            type: 1,
            do: function(v) {
                return v !== ""
            },
            tip: "字段不能为空值"
        },
        "isNum": {
            do: /\d+/,
            tip: "字段必须是数字"
        },
        "len_6_or_8": {
            do: /.{6,8}/,
            tip: "字段长度必须为6位到八位之间"
        }
    }
    // 抽象为一个对象
    win.CheckPack = function(config) {
        // 校验字段的配置
        this.config = config || {};
        // 存储错误信息
        this.msg = [];
    }
    // 核心方法
    win.CheckPack.prototype.check = function(obj) {
        this.msg = [];
        for (const k in obj) {
            if (obj.hasOwnProperty(k) && this.config[k]) {
                const ruleList = this.config[k].split(",");
                for (let i = 0; i < ruleList.length; i++) {
                    if (rule[ruleList[i]]) {
                        const checkRule = rule[ruleList[i]];
                        !(checkRule.type ? checkRule.do(obj[k]) : checkRule.do.test(String(obj[k]))) && this.msg.push({"key": k, "tip": checkRule.tip})
                    } else {
                        console.info("验证规则库暂无" + ruleList[i] + "验证规则！如需要请添加！")
                    }
                }
            }
        }
    }
})(this)

/**
 * var check = new CheckPack({name: "isNum,isDate,isNonEmpty", age: "isNum", paw: "len_6_or_8"});
 * check.check({name: "7788abc", age: 20, paw: 234567})
 * console.log(check.msg)
 */