/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/
*/
var handleJstreeDefault = function () {
    $("#jstree-default").jstree({
        core: {themes: {responsive: !1}},
        types: {"default": {icon: "fa fa-folder text-warning fa-lg"}, file: {icon: "fa fa-file text-inverse fa-lg"}},
        plugins: ["types"]
    }), $("#jstree-default").on("select_node.jstree", function (e, t) {
        var a = $("#" + t.selected).find("a");
        return "#" != a.attr("href") && "javascript:;" != a.attr("href") && "" != a.attr("href") ? ("_blank" == a.attr("target") && (a.attr("href").target = "_blank"), document.location.href = a.attr("href"), !1) : void 0
    })
}, handleJstreeCheckable = function () {
    $("#jstree-checkable").jstree({
        plugins: ["wholerow", "checkbox", "types"],
        core: {
            themes: {responsive: !1},
            data: [{
                text: "Same but with checkboxes",
                children: [{
                    text: "initially selected",
                    state: {selected: !0}
                }, {text: "Folder 1"}, {text: "Folder 2"}, {text: "Folder 3"}, {
                    text: "initially open",
                    icon: "fa fa-folder fa-lg",
                    state: {opened: !0},
                    children: [{text: "Another node"}, {text: "disabled node", state: {disabled: !0}}]
                }, {text: "custom icon", icon: "fa fa-cloud-download fa-lg text-inverse"}, {
                    text: "disabled node",
                    state: {disabled: !0}
                }]
            }, "Root node 2"]
        },
        types: {"default": {icon: "fa fa-folder text-primary fa-lg"}, file: {icon: "fa fa-file text-success fa-lg"}}
    })
}, handleJstreeDragAndDrop = function () {
    $("#jstree-drag-and-drop").jstree({
        core: {
            themes: {responsive: !1},
            check_callback: !0,
            data: [{
                text: "Parent Node",
                children: [{
                    text: "Initially selected",
                    state: {selected: !0}
                }, {text: "Folder 1"}, {text: "Folder 2"}, {text: "Folder 3"}, {
                    text: "Initially open",
                    icon: "fa fa-folder text-success fa-lg",
                    state: {opened: !0},
                    children: [{text: "Disabled node", disabled: !0}, {text: "Another node"}]
                }, {text: "Another Custom Icon", icon: "fa fa-cog text-inverse fa-lg"}, {
                    text: "Disabled Node",
                    state: {disabled: !0}
                }, {
                    text: "Sub Nodes",
                    icon: "fa fa-folder text-danger fa-lg",
                    children: [{text: "Item 1", icon: "fa fa-file fa-lg"}, {
                        text: "Item 2",
                        icon: "fa fa-file fa-lg"
                    }, {text: "Item 3", icon: "fa fa-file fa-lg"}, {
                        text: "Item 4",
                        icon: "fa fa-file fa-lg"
                    }, {text: "Item 5", icon: "fa fa-file fa-lg"}]
                }]
            }, "Another Node"]
        },
        types: {"default": {icon: "fa fa-folder text-warning fa-lg"}, file: {icon: "fa fa-file text-warning fa-lg"}},
        state: {key: "demo2"},
        plugins: ["contextmenu", "dnd", "state", "types"]
    })
}, handleJstreeAjax = function () {
    $("#jstree-ajax").jstree({
        core: {
            themes: {responsive: !1}, check_callback: !0, data: {
                url: function (e) {
                    return "#" === e.id ? "../assets/plugins/jstree/demo/data_root.json" : "../assets/plugins/jstree/demo/" + e.original.file
                }, data: function (e) {
                    return {id: e.id}
                }, dataType: "json"
            }
        },
        types: {"default": {icon: "fa fa-folder text-warning fa-lg"}, file: {icon: "fa fa-file text-warning fa-lg"}},
        plugins: ["dnd", "state", "types"]
    })
}, TreeView = function () {
    "use strict";
    return {
        init: function () {
            handleJstreeDefault(), handleJstreeCheckable(), handleJstreeDragAndDrop(), handleJstreeAjax()
        }
    }
}();