(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * Multiple Select it-IT translation
   * Author: Giuseppe Lodi Rizzini
   */

  $__default['default'].fn.multipleSelect.locales['it-IT'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Seleziona tutti]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Tutti selezionati';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' di ' + total + ' selezionati';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'Nessun risultato';
    }
  };
  $__default['default'].extend($__default['default'].fn.multipleSelect.defaults, $__default['default'].fn.multipleSelect.locales['it-IT']);

})));
