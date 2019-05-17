﻿/**
 * Contains the TabView class, which represents a standard content component with tabs.
 * @module "ui/tab-view"
 */ /** */

import { View, ViewBase, Property, CssProperty, Style, EventData, Color } from "../core/view";
import { TextTransform } from "../text-base";

/**
 * Represents a tab strip entry.
 */
export class TabStripItem extends ViewBase {
    /**
     * Gets or sets the title of the tab strip entry.
     */
    title: string;

    /**
     * Gets or sets the icon source of the tab strip entry.
     */
    iconSource: string;
}

/**
 * Represents a tab strip.
 */
export class TabStrip extends ViewBase {
    /**
     * Gets or sets the items of the tab strip.
     */
    items: Array<TabStripItem>;

    /**
     * Gets or sets the icon rendering mode on iOS
     */
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
}

/**
 * Represents a tab view entry.
 */
export class TabContentItem extends ViewBase {
    /**
     * Gets or sets the view of the TabViewItem.
     */
    public view: View;

    /**
     * @private
     */
    canBeLoaded?: boolean;
}

/**
 * Defines the data for the TabView.selectedIndexChanged event.
 */
export interface SelectedIndexChangedEventData extends EventData {
    /**
     * The old selected index.
     */
    oldIndex: number;

    /**
     * The new selected index.
     */
    newIndex: number;
}

/**
 * Represents a tab view.
 */
export class BottomNavigation extends View {
    /**
     * Gets or sets the items of the TabView.
     */
    items: Array<TabContentItem>;

    /**
     * Gets or sets the tab strip of the TabView.
     */
    tabStrip: TabStrip;

    /**
     * Gets or sets the selectedIndex of the TabView.
     */
    selectedIndex: number;

    /**
     * Gets or sets the font size of the tabs titles.
     */
    tabTextFontSize: number;

    /**
     * Gets or sets the text color of the tabs titles.
     */
    tabTextColor: Color;
    
    /**
     * Gets or sets the background color of the tabs.
     */
    tabBackgroundColor: Color;
    
    /**
     * Gets or sets the text color of the selected tab title.
     */
    selectedTabTextColor: Color;
    
    /**
     * Gets or sets the color of the horizontal line drawn below the currently selected tab on Android.
     */
    androidSelectedTabHighlightColor: Color;

    /**
     * Gets the native [android widget](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.view.View */; //android.support.v4.view.ViewPager;

    /**
     * Gets the native iOS [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* UITabBarController */;

    /**
     * Gets or set the UIImageRenderingMode of the tab icons in iOS. 
     * Valid values are:
     *  - automatic
     *  - alwaysOriginal
     *  - alwaysTemplate  
     */
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";

    /**
     * Gets or sets the number of tabs that should be retained to either side of the current tab in the view hierarchy in an idle state. 
     * Tabs beyond this limit will be recreated from the TabView when needed.  
     */
    androidOffscreenTabLimit: number;

    /**
     * Gets or set the tabs vertical position.
     * Valid values are:
     *  - top
     *  - bottom
     */
    androidTabsPosition: "top" | "bottom";

    /**
     * Gets or sets a value indicating whether swipe gesture is enabled for Android.
     */
    androidSwipeEnabled: boolean;

    /**
     * String value used when hooking to the selectedIndexChanged event.
     */
    public static selectedIndexChangedEvent: string;

    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);

    /**
     * Raised when the selected index changes.
     */
    on(event: "selectedIndexChanged", callback: (args: SelectedIndexChangedEventData) => void, thisArg?: any);
}

export const itemsProperty: Property<BottomNavigation, TabContentItem[]>;
export const selectedIndexProperty: Property<BottomNavigation, number>;

export const tabTextFontSizeProperty: CssProperty<Style, number>;
export const tabTextColorProperty: CssProperty<Style, Color>;
export const tabBackgroundColorProperty: CssProperty<Style, Color>;
export const selectedTabTextColorProperty: CssProperty<Style, Color>;
export const androidSelectedTabHighlightColorProperty: CssProperty<Style, Color>;
export const androidOffscreenTabLimitProperty: Property<BottomNavigation, number>;
export const iosIconRenderingModeProperty: Property<BottomNavigation, "automatic" | "alwaysOriginal" | "alwaysTemplate">;
