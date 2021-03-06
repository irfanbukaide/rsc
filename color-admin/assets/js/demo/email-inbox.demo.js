/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/
*/
var handleEmailActionButtonStatus = function () {
    0 !== $("[data-checked=email-checkbox]:checked").length ? $("[data-email-action]").removeClass("hide") : $("[data-email-action]").addClass("hide")
}, handleEmailCheckboxChecked = function () {
    $(document).on("change", "[data-checked=email-checkbox]", function () {
        var e = $(this).closest("label"), a = $(this).closest("li");
        $(this).prop("checked") ? ($(e).addClass("active"), $(a).addClass("selected")) : ($(e).removeClass("active"), $(a).removeClass("selected")), handleEmailActionButtonStatus()
    })
}, handleEmailAction = function () {
    $(document).on("click", "[data-email-action]", function () {
        0 !== $("[data-checked=email-checkbox]:checked").length && $("[data-checked=email-checkbox]:checked").closest("li").slideToggle(function () {
            $(this).remove(), handleEmailActionButtonStatus(), 0 === $(".list-email > li").length && $(".list-email").html('<li class="p-15 text-center"><div class="p-20"><i class="fa fa-trash fa-5x text-silver"></i></div> This folder is empty</li>')
        })
    })
}, handleEmailSelectAll = function () {
    "use strict";
    $("[data-click=email-select-all]").click(function (e) {
        e.preventDefault();
        var a = $(this).find("i");
        $(a).hasClass("fa-check-square") ? ($(a).removeClass("fa-check-square text-inverse").addClass("fa-square text-muted"), $('.list-email .email-checkbox input[type="checkbox"]').prop("checked", !1)) : ($(a).addClass("fa-check-square text-inverse").removeClass("fa-square text-muted"), $('.list-email .email-checkbox input[type="checkbox"]').prop("checked", !0)), $('.list-email .email-checkbox input[type="checkbox"]').trigger("change")
    })
}, InboxV2 = function () {
    "use strict";
    return {
        init: function () {
            handleEmailCheckboxChecked(), handleEmailAction(), handleEmailSelectAll()
        }
    }
}();