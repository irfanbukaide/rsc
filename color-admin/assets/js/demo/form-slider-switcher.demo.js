/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/
*/
var renderSwitcher = function () {
    0 !== $("[data-render=switchery]").length && $("[data-render=switchery]").each(function () {
        var t = COLOR_GREEN;
        if ($(this).attr("data-theme")) switch ($(this).attr("data-theme")) {
            case"red":
                t = COLOR_RED;
                break;
            case"blue":
                t = COLOR_BLUE;
                break;
            case"purple":
                t = COLOR_PURPLE;
                break;
            case"orange":
                t = COLOR_ORANGE;
                break;
            case"black":
                t = COLOR_BLACK
        }
        var a = {};
        a.color = t, a.secondaryColor = $(this).attr("data-secondary-color") ? $(this).attr("data-secondary-color") : "#dfdfdf", a.className = $(this).attr("data-classname") ? $(this).attr("data-classname") : "switchery", a.disabled = !!$(this).attr("data-disabled"), a.disabledOpacity = $(this).attr("data-disabled-opacity") ? parseFloat($(this).attr("data-disabled-opacity")) : .5, a.speed = $(this).attr("data-speed") ? $(this).attr("data-speed") : "0.5s";
        new Switchery(this, a)
    })
}, checkSwitcherState = function () {
    $(document).on("click", '[data-click="check-switchery-state"]', function () {
        alert($('[data-id="switchery-state"]').prop("checked"))
    }), $(document).on("change", '[data-change="check-switchery-state-text"]', function () {
        $('[data-id="switchery-state-text"]').text($(this).prop("checked"))
    })
}, renderPowerRangeSlider = function () {
    0 !== $('[data-render="powerange-slider"]').length && $('[data-render="powerange-slider"]').each(function () {
        var t = {};
        t.decimal = !!$(this).attr("data-decimal") && $(this).attr("data-decimal"), t.disable = !!$(this).attr("data-disable") && $(this).attr("data-disable"), t.disableOpacity = $(this).attr("data-disable-opacity") ? parseFloat($(this).attr("data-disable-opacity")) : .5, t.hideRange = !!$(this).attr("data-hide-range") && $(this).attr("data-hide-range"), t.klass = $(this).attr("data-class") ? $(this).attr("data-class") : "", t.min = $(this).attr("data-min") ? parseInt($(this).attr("data-min")) : 0, t.max = $(this).attr("data-max") ? parseInt($(this).attr("data-max")) : 100, t.start = $(this).attr("data-start") ? parseInt($(this).attr("data-start")) : null, t.step = $(this).attr("data-step") ? parseInt($(this).attr("data-step")) : null, t.vertical = !!$(this).attr("data-vertical") && $(this).attr("data-vertical"), $(this).attr("data-height") && $(this).closest(".slider-wrapper").height($(this).attr("data-height"));
        new Switchery(this, t), new Powerange(this, t)
    })
}, FormSliderSwitcher = function () {
    "use strict";
    return {
        init: function () {
            renderSwitcher(), checkSwitcherState(), renderPowerRangeSlider()
        }
    }
}();