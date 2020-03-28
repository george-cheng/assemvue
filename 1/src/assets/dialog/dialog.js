import Vue from 'vue'
import dialogVue from './dialog.vue'
import maskVue from './mask.vue'
import {guid} from "../common.js"
const DialogConstructor = Vue.extend(dialogVue)
window.dialogKeyValue = new keyvalue();
window.dialogMask = new keyvalue();
window.dialogCurrent = new keyvalue();
import keyvalue from '../keyvalue.js'

const Dialog = function (id) {
  this.id = id;
  this.title = '';
  this.width = 400;
  this.height = 300;
  this.isHead = true;
  this.isShow = true;
  this.closeCallBack = null;
};


Dialog.OpenWindow = function (options) {
  var id = guid() + new Date().getTime();
  var dialog = new Dialog(id);
  dialog.title = options.title ? options.title : "系统提示";
  dialog.width = options.width ? options.width: 400;
  dialog.closeCallBack = options.closeCallBack
};

export default {
  install(Vue, options){
    Vue.prototype.$dialog = Dialog
  }
}

































