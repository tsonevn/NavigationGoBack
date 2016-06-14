"use strict";
var frame_1 = require("ui/frame");
function onLoaded(args) {
    // topmost().navigate({
    //     moduleName:'main-page'
    // });
}
exports.onLoaded = onLoaded;
function onTap(args) {
    frame_1.topmost().navigate({
        moduleName: 'main-page'
    });
}
exports.onTap = onTap;
function goBack(args) {
    console.log("click back function");
    setTimeout(function () {
        //topmost().goBack();
    }, 10);
}
exports.goBack = goBack;
function secondTap(args) {
    frame_1.topmost().goBack();
}
exports.secondTap = secondTap;
function goNextPage(args) {
    frame_1.topmost().navigate({ moduleName: "/pages/page2" });
}
exports.goNextPage = goNextPage;
//# sourceMappingURL=pages.js.map