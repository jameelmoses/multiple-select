(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * Multiple Select zh-TW translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $__default['default'].fn.multipleSelect.locales['zh-TW'] = {
    formatSelectAll: function formatSelectAll() {
      return '[全選]';
    },
    formatAllSelected: function formatAllSelected() {
      return '已選擇所有記錄';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return '已從' + total + '條記錄中選擇' + count + '條';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return '沒有找到記錄';
    }
  };
  $__default['default'].extend($__default['default'].fn.multipleSelect.defaults, $__default['default'].fn.multipleSelect.locales['zh-TW']);

})));
