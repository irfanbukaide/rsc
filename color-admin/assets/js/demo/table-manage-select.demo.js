/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/
*/
var handleDataTableSelect = function () {
    "use strict";
    0 !== $("#data-table-select").length && $("#data-table-select").DataTable({select: !0, responsive: !0})
}, TableManageTableSelect = function () {
    "use strict";
    return {
        init: function () {
            handleDataTableSelect()
        }
    }
}();