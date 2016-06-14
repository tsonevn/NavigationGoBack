"use strict";
var frame_1 = require("ui/frame");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
function onTapMain(args) {
    frame_1.topmost().navigate({ moduleName: "./pages/pages" });
}
exports.onTapMain = onTapMain;
function onLoaded(args) {
    frame_1.topmost().navigate({ moduleName: "./pages/pages" });
}
exports.onLoaded = onLoaded;
function stackLoaded(args) {
    //topmost().navigate({moduleName:"./pages/pages"});
}
exports.stackLoaded = stackLoaded;
function buttonLaoded(args) {
    //topmost().navigate({moduleName:"./pages/pages"});
}
exports.buttonLaoded = buttonLaoded;
//# sourceMappingURL=main-page.js.map