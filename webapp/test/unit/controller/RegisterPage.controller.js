/*global QUnit*/

sap.ui.define([
	"com/sap/demo/registerpageapp/controller/RegisterPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("RegisterPage Controller");

	QUnit.test("I should test the RegisterPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
