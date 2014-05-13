'use strict';

angular.module('shareLocApp')
  .directive('friendbox', function (Coordenadaservice) {
    return {
      scope:{
        friendInfo:'=friendInfo'
      },
      templateUrl: function(tElement,tAttrs){
        return tAttrs.friendTemplate;
      },
      /*
      * 'A' - only matches attribute name
       'E' - only matches element name
       'C' - only matches class name
       These restrictions can all be combined as needed:

       'AEC' - matches either attribute or element or class name
       */
      restrict: 'E',
      link: function postLink($scope, element, attrs) {
        $scope.enviarMensaje = function(){
          //Coordenadaservice.enviarMensajeAlMuro();
          var locacion = Coordenadaservice.getLocacionEnviar();
          /*Imaginate que FB.ui no deja mandar mensajes en mobile web...
           * Porque Zucarita? Porque?
           *
           * Integration Examples:
           * This dialog can be used with the JavaScript SDK and by performing a full
           * redirect to a URL.
           * It is not supported on mobile devices. -__________-
           * https://developers.facebook.com/docs/sharing/reference/send-dialog
           * */
          var obj = {
            method: 'feed',
            to: $scope.friendInfo.id,
            link: 'http://sharelocapi.jit.su/shareloc/dist/#/location/'+locacion.lat()+'/'+locacion.lng(),
            picture:'http://www.omicrono.com/wp-content/uploads/2011/12/trololo.jpg',
            name: 'ShareLoc',
            caption: 'Compartir Ubicación',
            description: 'Comparte ubicaciones con ShareLoc.'
          };

          function callback(response) {

          }
          FB.ui(obj, callback);
        }
         //element.text('this is the friendBox directive');
      }
    };
  });
