
$( document ).ready(function() {
  var thermostat = new Thermostat();
  checkTemperature();

  $('#increasetemp').click(function() {
    thermostat.increaseTemperature();
    checkTemperature();
  });

  $('#decreasetemp').click(function() {
    thermostat.decreaseTemperature();
    checkTemperature();
  });

  $('#powersaveon').click(function() {
    thermostat.powerSaveOn();
    $('#power-saving-status').text('on');
    checkTemperature();
  });

  $('#powersaveoff').click(function() {
    thermostat.powerSaveOff();
    $('#power-saving-status').text('off');
    checkTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    checkTemperature();
  });

  function checkTemperature() {
$('#temperature').text(thermostat.temperature);
$('#temperature').attr('green', thermostat.energyChecker());
}
    // function checkTemperature() {
    //   $('#temperature').text(thermostat.temperature);
    // }

//     function checkTemperature() {
//   $('#temperature').text(thermostat.temperature);
//   if(thermostat.energyChecker() === 'green') {
//     $('#temperature').css('color', 'green')
//   } else if(thermostat.energyChecker() === 'yellow') {
//     $('#temperature').css('color', 'yellow')
//   } else {
//     $('#temperature').css('color', 'red')
//   }
// }


});

//   // document.getElementById("increasetemp").innerHTML = thermostat.increaseTemperature;
//
//   // $( "button" ).addClass( "test" );
//
//   $( "#increasetemp" ).click(function( event ) {
//
//     event.preventDefault();
//
//     $( this ).hide( "slow" );
//
//
// });
//
// $( "#decreasetemp" ).click(function( event ) {
//
//   event.preventDefault();
//
//   $( this ).hide( "slow" );
//
//
// });
//
// });
//
// // window.onload = function() {
// //
// //     alert( "welcome" );
// //
// // };
