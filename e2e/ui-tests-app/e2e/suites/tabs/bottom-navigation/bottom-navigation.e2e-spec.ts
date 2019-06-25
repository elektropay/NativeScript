import { nsCapabilities, createDriver, AppiumDriver } from "nativescript-dev-appium";
import { BottomNavigationBasePage } from "./bottom-navigation-base-page";
import { Platform } from "mobile-devices-controller";

const suite = "tabs";
const spec = "bottom-navigation";
const fullSuiteName = `${suite}-${spec}`;

describe(`${fullSuiteName}-tests-suite`, async function () {
    let driver: AppiumDriver;
    let bottomNavigationBasePage: BottomNavigationBasePage;

    before(async function () {
        nsCapabilities.testReporter.context = this;
        driver = await createDriver();
        await driver.resetApp();
        bottomNavigationBasePage = new BottomNavigationBasePage(driver);
        await bottomNavigationBasePage.initSuite();
    });

    after(async function () {
        await bottomNavigationBasePage.endSuite();
    });

    beforeEach(function () {
        bottomNavigationBasePage.imageHelper.testName = `${fullSuiteName}-${this.currentTest.title.replace(suite, "")}`;
    });

    beforeEach(async function () {
        bottomNavigationBasePage.imageHelper.testName = this.currentTest.title;
        bottomNavigationBasePage.imageHelper.defualtOptions = {
            imageName: this.currentTest.title,
            tolerance: 0.01,
            timeOutSeconds: 5
        }
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
            await driver.resetApp();
            await bottomNavigationBasePage.initSuite();
        }
    });

    it(`${spec}-background-color`, async function () {
        await bottomNavigationBasePage.navigateToSample("background-color");

        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();

        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-bottom-navigation`, async function () {
        await bottomNavigationBasePage.navigateToSample("bottom-navigation");
        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();
        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-color`, async function () {
        await bottomNavigationBasePage.navigateToSample("color");
        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();
        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-icon-change`, async function () {
        await bottomNavigationBasePage.navigateToSample("tab-view-icon-change");
        const index = driver.nsCapabilities.device.platform == Platform.IOS
            ? (driver.nsCapabilities.device.apiLevel >= 11 ? 2 : 3) : 1;

        let btns = await driver.findElementsByClassName(driver.locators.button, 5000);
        await btns[index].tap();
        await bottomNavigationBasePage.imageHelper.compareScreen();

        btns = await driver.findElementsByClassName(driver.locators.button, 5000);
        await btns[index - 1].tap();
        await bottomNavigationBasePage.imageHelper.compareScreen();

        await bottomNavigationBasePage.imageHelper.assertImages();

        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-icon-title-placment`, async function () {
        await bottomNavigationBasePage.navigateToSample("icon-title-placement");
        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();
        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-issue-5470`, async function () {
        await bottomNavigationBasePage.navigateToSample("issue-5470");
        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();
        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-swipe-enabled`, async function () {
        await bottomNavigationBasePage.navigateToSample("swipe-enabled");
        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();
        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });

    it(`${spec}-tab-position`, async function () {
        await bottomNavigationBasePage.navigateToSample("tab-position");
        await bottomNavigationBasePage.imageHelper.compareScreen();
        await bottomNavigationBasePage.imageHelper.assertImages();
        await bottomNavigationBasePage.navigateBackToSuitMainPage();
    });
});