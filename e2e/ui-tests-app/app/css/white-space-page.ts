﻿import * as view from "tns-core-modules/ui/core/view";
import * as observable from "tns-core-modules/data/observable";
import * as label from "tns-core-modules/ui/label";
import * as button from "tns-core-modules/ui/button";
import * as textField from "tns-core-modules/ui/text-field";
import * as textView from "tns-core-modules/ui/text-view";

export function butonTap(args: observable.EventData) {
    var btnChange = <view.View>args.object;
    var lbl = <label.Label>btnChange.parent.getViewById("Label");
    var btn = <button.Button>btnChange.parent.getViewById("Button");
    var textField = <textField.TextField>btnChange.parent.getViewById("TextField");
    var textView = <textView.TextView>btnChange.parent.getViewById("TextView");

    if (lbl.style.whiteSpace === "normal") {
        lbl.style.whiteSpace = "nowrap";
        btn.style.whiteSpace = "nowrap";
        textField.style.whiteSpace = "nowrap";
        textView.style.whiteSpace = "nowrap";
    } else if (lbl.style.whiteSpace === "nowrap") {
        lbl.style.whiteSpace = "normal";
        btn.style.whiteSpace = "normal";
        textField.style.whiteSpace = "normal";
        textView.style.whiteSpace = "normal";
    }
}
