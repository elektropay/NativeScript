﻿import frame = require("tns-core-modules/ui/frame");

export function navigate(args) {
    frame.topmost().navigate("action-bar/clean-page");
}
