(function(win) {
    var bus = {};

    bus.isNum = function(v) {
        v = String(v);
        if (isNaN(v) || v == "") {
            return false
        }
        return true
    }

    bus.num = function(v) {
        if (!this.isNum(v)) return v;
        return Number(v)
    }

    bus.accuracy = function(v, n) {
        n = this.isNum(n) ? n : 15;
        if (!this.isNum(v)) return v;
        return Math.round(v * Math.pow(10, n)) / Math.pow(10, n)
    }

    bus.largeFormat = function(v) {
        if (!this.isNum(v)) return v;
        var u = String(v).split(".");
        u[0] = u[0].replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,")
        return u.join(".")
    }

    bus.keep = function(v, n) {
        if (!this.isNum(v)) return v;
        return this.accuracy(v, n || 0)
    }

    win.numPack = {
        fish: function(v) {
            var s = bus.num(v);
            var context = function(fnArg) {
                var fnArr = fnArg.split("-");
                var fn = fnArr[0];
                var arg = fnArr[1] || "";
                s = bus[fn] ? bus[fn](s, arg) : s;
                return context
            }
            context.toString = function() {
                return s
            }

            return context
        }
    }

})(this)
/**
 * 示例：
 *      numPack.fish(1234567892.00098762)("keep")("largeFormat") // 1,234,567,892
 *      numPack.fish(1234567892.15698762)("keep-2")("largeFormat") // 1,234,567,892.16
 */