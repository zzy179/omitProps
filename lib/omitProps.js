"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = omitProps;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function omitProps(target, keys) {
  var len = keys.length;
  if (len < 1) return target;

  var copy = _objectSpread({}, target);

  for (var i = 0; i < len; i++) {
    if (copy[keys[i]] !== "undefined") {
      delete copy[keys[i]];
    }
  }

  return copy;
}