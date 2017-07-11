"use strict";
module.exports = function (thunk, workers) {
    var workerChain = [];

    var process = function *(task) {
        yield pickworker();
        var ret = yield thunk.call(this, task);
        freeworker();
        return Promise.resolve(ret);
    };

    var pickworker = function () {
        if (!workers) {
            return new Promise(function (resolve, reject) {
                workerChain.push(resolve)
            });
        }
        return Promise.resolve(workers--);
    };

    var freeworker = function () {
        workers++;
        if (workerChain.length) {
            workerChain.shift()(pickworker());
        }
    };

    var out = process;
    out.push = process;
    return out;
};
