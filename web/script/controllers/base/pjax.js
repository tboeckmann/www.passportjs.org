define(['./base',
        'class',
        'jquery', 'jquery.pjax'],
function(Controller, clazz, $, __$_pjax) {
  
  function PjaxController(basePath, path) {
    Controller.call(this, basePath);
    this.canonicalPath = path;
  }
  clazz.inherits(PjaxController, Controller);
  
  PjaxController.prototype.load = function() {
    var self = this;
    $.pjax({ url: this.canonicalPath, fragment: '#page-content', container: '#page-content', push: false })
      .done(function(data) {
        self.emit('ready');
      });
  };
  
  
  return PjaxController;
  
});
