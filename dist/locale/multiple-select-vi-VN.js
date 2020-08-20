(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * Multiple Select vi-VN translation
   * Author: hoangbaovu <ineo.vn>
   */

  $__default['default'].fn.multipleSelect.locales['vi-VN'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Tất cả]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Chọn tất cả';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return 'Đã chọn ' + count + ' trong ' + total;
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'Không tìm thấy kết quả.';
    }
  };
  $__default['default'].extend($__default['default'].fn.multipleSelect.defaults, $__default['default'].fn.multipleSelect.locales['vi-VN']);

})));
