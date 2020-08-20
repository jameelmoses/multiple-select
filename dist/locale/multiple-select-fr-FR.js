(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * Multiple Select fr-FR translation
   * Author: Francis Perron <francis@hivetek.com>
   */

  $__default['default'].fn.multipleSelect.locales['fr-FR'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Tout sélectionner]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Tous sélectionnés';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' de ' + total + ' sélectionnés';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'Aucun résultat';
    }
  };
  $__default['default'].extend($__default['default'].fn.multipleSelect.defaults, $__default['default'].fn.multipleSelect.locales['fr-FR']);

})));
