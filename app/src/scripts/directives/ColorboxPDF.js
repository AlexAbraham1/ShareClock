'use strict';

module.exports = function($compile, $rootScope) {
  
  return {
    link: function(scope, element, attrs){
      element.click('bind', function(){
        $.colorbox({
          opacity:0.7, 
          width: '75%',
          height: '90%',
          inline: true,
          href: "#pdfHTML",
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