/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/
*/
Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    var t = this.length >>> 0, a = Number(arguments[1]) || 0;
    for ((a = a < 0 ? Math.ceil(a) : Math.floor(a)) < 0 && (a += t); a < t; a++) if (a in this && this[a] === e) return a;
    return -1
}), "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
});
var handleDatepicker = function () {
    $("#datepicker-default").datepicker({todayHighlight: !0}), $("#datepicker-inline").datepicker({todayHighlight: !0}), $(".input-daterange").datepicker({todayHighlight: !0}), $("#datepicker-disabled-past").datepicker({todayHighlight: !0}), $("#datepicker-autoClose").datepicker({
        todayHighlight: !0,
        autoclose: !0
    })
}, handleIonRangeSlider = function () {
    $("#default_rangeSlider").ionRangeSlider({
        min: 0,
        max: 5e3,
        type: "double",
        prefix: "$",
        maxPostfix: "+",
        prettify: !1,
        hasGrid: !0
    }), $("#customRange_rangeSlider").ionRangeSlider({
        min: 1e3,
        max: 1e5,
        from: 3e4,
        to: 9e4,
        type: "double",
        step: 500,
        postfix: " €",
        hasGrid: !0
    }), $("#customValue_rangeSlider").ionRangeSlider({
        values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        type: "single",
        hasGrid: !0
    })
}, handleFormMaskedInput = function () {
    "use strict";
    $("#masked-input-date").mask("99/99/9999"), $("#masked-input-phone").mask("(999) 999-9999"), $("#masked-input-tid").mask("99-9999999"), $("#masked-input-ssn").mask("999-99-9999"), $("#masked-input-pno").mask("aaa-9999-a"), $("#masked-input-pkey").mask("a*-999-a999")
}, handleFormColorPicker = function () {
    "use strict";
    $("#colorpicker").colorpicker({format: "hex"}), $("#colorpicker-prepend").colorpicker({format: "hex"}), $("#colorpicker-rgba").colorpicker()
}, handleFormTimePicker = function () {
    "use strict";
    $("#timepicker").timepicker()
}, handleFormPasswordIndicator = function () {
    "use strict";
    $("#password-indicator-default").passwordStrength(), $("#password-indicator-visible").passwordStrength({targetDiv: "#passwordStrengthDiv2"})
}, handleJqueryAutocomplete = function () {
    $("#jquery-autocomplete").autocomplete({source: ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]})
}, handleBootstrapCombobox = function () {
    $(".combobox").combobox()
}, handleTagsInput = function () {
    $(".bootstrap-tagsinput input").focus(function () {
        $(this).closest(".bootstrap-tagsinput").addClass("bootstrap-tagsinput-focus")
    }), $(".bootstrap-tagsinput input").focusout(function () {
        $(this).closest(".bootstrap-tagsinput").removeClass("bootstrap-tagsinput-focus")
    })
}, handleSelectpicker = function () {
    $(".selectpicker").selectpicker("render")
}, handleJqueryTagIt = function () {
    $("#jquery-tagIt-default").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-inverse").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-white").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-primary").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-info").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-success").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-warning").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]}), $("#jquery-tagIt-danger").tagit({availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]})
}, handleDateRangePicker = function () {
    $("#default-daterange").daterangepicker({
        opens: "right",
        format: "MM/DD/YYYY",
        separator: " to ",
        startDate: moment().subtract("days", 29),
        endDate: moment(),
        minDate: "01/01/2012",
        maxDate: "12/31/2018"
    }, function (e, t) {
        $("#default-daterange input").val(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
    }), $("#advance-daterange span").html(moment().subtract("days", 29).format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")), $("#advance-daterange").daterangepicker({
        format: "MM/DD/YYYY",
        startDate: moment().subtract(29, "days"),
        endDate: moment(),
        minDate: "01/01/2012",
        maxDate: "12/31/2015",
        dateLimit: {days: 60},
        showDropdowns: !0,
        showWeekNumbers: !0,
        timePicker: !1,
        timePickerIncrement: 1,
        timePicker12Hour: !0,
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        },
        opens: "right",
        drops: "down",
        buttonClasses: ["btn", "btn-sm"],
        applyClass: "btn-primary",
        cancelClass: "btn-default",
        separator: " to ",
        locale: {
            applyLabel: "Submit",
            cancelLabel: "Cancel",
            fromLabel: "From",
            toLabel: "To",
            customRangeLabel: "Custom",
            daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstDay: 1
        }
    }, function (e, t, a) {
        $("#advance-daterange span").html(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
    })
}, handleSelect2 = function () {
    $(".default-select2").select2(), $(".multiple-select2").select2({placeholder: "Select a state"})
}, handleDateTimePicker = function () {
    $("#datetimepicker1").datetimepicker(), $("#datetimepicker2").datetimepicker({format: "LT"}), $("#datetimepicker3").datetimepicker(), $("#datetimepicker4").datetimepicker(), $("#datetimepicker3").on("dp.change", function (e) {
        $("#datetimepicker4").data("DateTimePicker").minDate(e.date)
    }), $("#datetimepicker4").on("dp.change", function (e) {
        $("#datetimepicker3").data("DateTimePicker").maxDate(e.date)
    })
}, handleBootstrapColorPalette = function () {
    $("#color-palette-1").colorPalette().on("selectColor", function (e) {
        $('[data-id="color-palette-1"]').val(e.color)
    });
    $("#color-palette-custom").colorPalette({colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#EFF7F7", "#FFFFFF"]]}).on("selectColor", function (e) {
        $('[data-id="color-palette-custom"]').val(e.color)
    })
}, handleSimpleColorpicker = function () {
    $('select[name="jquery-simplecolorpicker"]').simplecolorpicker("selectColor", "#2d353c"), $('select[name="jquery-simplecolorpicker-fa"]').simplecolorpicker({theme: "fontawesome"}), $('select[name="colorpicker-picker-longlist"]').simplecolorpicker({
        picker: !0,
        theme: "glyphicons"
    })
}, handleClipboard = function () {
    new ClipboardJS(".btn").on("success", function (t) {
        $(t.trigger).tooltip({
            title: "Copied",
            placement: "top"
        }), $(t.trigger).tooltip("show"), setTimeout(function () {
            var e = handleCheckBootstrapVersion();
            3 <= e && e < 4 ? $(t.trigger).tooltip("destroy") : 4 <= e && e < 5 && $(t.trigger).tooltip("dispose")
        }, 500)
    })
}, FormPlugins = function () {
    "use strict";
    return {
        init: function () {
            handleDatepicker(), handleIonRangeSlider(), handleFormMaskedInput(), handleFormColorPicker(), handleFormTimePicker(), handleFormPasswordIndicator(), handleJqueryAutocomplete(), handleBootstrapCombobox(), handleSelectpicker(), handleTagsInput(), handleJqueryTagIt(), handleDateRangePicker(), handleSelect2(), handleDateTimePicker(), handleBootstrapColorPalette(), handleSimpleColorpicker(), handleClipboard()
        }
    }
}();