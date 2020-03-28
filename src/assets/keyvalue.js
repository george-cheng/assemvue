export default function keyvalue() {
  this.key = new Array();
  this.data = new Array();

  this.set = function (key, value) {
    if(this.data[key] == null){
      this.keys.push(key)
    }
    this.data[key] = value
  };

  this.get = function (key) {
    return this.data[key]
  };

  this.remove = function (key) {
    this.keys.pop();
    this.data[key] = null
  };

  this.isEmpty = function () {
    return this.keys.length == 0;
  };

  this.size = function () {
    return this.keys.length
  }
}
