import axios from 'axios'
import qs from 'qs'
const requestInstance = axios.create();

const AjaxRequest = function (options) {
  this.url = '';
  this.data = '';
  this.category = '0';
  this.successCall = null;
  this.progressCall = null;
};

let that = null;
let loading = '1';

const AjaxJson = function(options){
  that = this;
  var ajaxRequest = new AjaxRequest(options);
  if(ajaxRequest.init(options)){
    ajaxRequest.request()
  }
};

AjaxRequest.prototype.init = function(options){
  this.url = options && options.url || '';
  this.data = options && options.data || {};
  this.category = options && options.category || '0';
  this.loading = options && options.loading || '1';
  this.successCall = options && options.successCall || null;
  this.progressCall = options && options.progressCall || null;
  return true;
};

/* 请求数据 */
AjaxRequest.prototype.request = function(){
  var ajaxRequest = this;
  if(this.category === '1'){
    console.log(12);
    this.data = qs.stringify(this.data)
  }
  requestInstance.post(this.url,this.data).then(function (data) {
    if(data.type === 9){
      console.log(999);
    }else{

    }
  }).catch(function (data) {
    console.log('error');
  })
};


export default {
  install(Vue, options){
    Vue.prototype.ajaxJson = AjaxJson
  }
}
