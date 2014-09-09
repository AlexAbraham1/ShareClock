'use strict';

module.exports = function($compile, $rootScope) {
  
  return {
    link: function(scope, element, attrs){
      element.click('bind', function(){
        $.colorbox({
          opacity:0.7, 
          maxWidth: "85%", 
          scalePhotos: true,
          href: attrs.colorboximage,
          onComplete: function(){
            $rootScope.$apply(function(){
              var content = $('#cboxLoadedContent');
              $compile(content)($rootScope);      
            })
          }
        });
      });
    }
  };
    
}