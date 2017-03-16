$(document).ready(function() {


  



  var addZero = ((c) => { return c.toString().length < 2 ? "0" + c : c })

  var getHMS = (() => {

    var newDate = new Date()

    var hourM = newDate.getHours()

    var hour = ((hourM + 11) % 12 + 1)

    var minute = newDate.getMinutes()

    var second = newDate.getSeconds()

    return {
      'ap': (hourM > 11 ? 'PM' : 'AM'),
      'hr': addZero(hour),
      'mn': addZero(minute),
      'sc': addZero(second),
      'mt': addZero(hourM)  
    }

  })



  for (var i = 0; i < 12; i++) {

    $('<div/>', {
    
      id: ('hr' + i),
    
      class: 'cHourNotch'
    
    }).appendTo('#cHourBlock');

  }

  for (var i = 0; i < 59; i++) {
  
    $('<div/>', {
      
      id: ('min' + i),
      
      class: 'cMinNotch'
      
    }).appendTo('#cMinBlock');

  }

  for (var i = 0; i < 59; i++) {
  
      $('<div/>', {
      
        id: ('sec' + i),
      
        class: 'cSecNotch'
      
      }).appendTo('#cSecBlock');

    }




  setInterval(function() {
  

    var clr = '#' + (getHMS().mt).toString(16) + (getHMS().mn).toString(16) + (getHMS().sc).toString(16)

    $('#cHex').css('background-color', clr)

// console.log(clr)

    for (var i = 0; i < 12; i++) {
  
      var tDiv = '#hr' + i

      $(tDiv).css({
        'background-color': '#000',
        'border': '0.5px solid #444'

      })

    }

    for (var i = 0; i < (getHMS().hr); i++) {
  
      var tDiv = '#hr' + i

      $(tDiv).css({
        'background-color': clr,
        'border': '0.5px solid #999'
      
      })

    }

    for (var i = 0; i < 59; i++) {
  
      var tDiv = '#min' + i

      $(tDiv).css({
        'background-color': '#000',
        'border': '0.5px solid #444'

      })

    }

    for (var i = 0; i < (getHMS().mn); i++) {
  
      var tDiv = '#min' + i

      $(tDiv).css({
        'background-color': clr,
        'border': '0.5px solid #999'
      
      })

    }



    for (var i = 0; i < 59; i++) {
  
      var tDiv = '#sec' + i

      $(tDiv).css({
        'background-color': '#000',
        'border': '0.5px solid #444'

      })

    }

    for (var i = 0; i < (getHMS().sc); i++) {
  
      var tDiv = '#sec' + i

      $(tDiv).css({
        'background-color': clr,
        'border': '0.5px solid #999'
      
      })
      

    }





      //$("#cDigital").html(getHMS().hr + ":" + getHMS().mn + ":" + getHMS().sc + " " + getHMS().ap)
      $('#cDigHour').html(getHMS().hr)

      $('#cDigMin').html(getHMS().mn)

      $('#cDigSec').html(getHMS().sc)

      $('#cDigAmPm').html(getHMS().ap)

      $('#cHex').html(clr.toUpperCase())
    

/*
      <div id="cDigHour"></div>
      <div id="cDigMin"></div>
      <div id="cDigSec"></div>
      <div id="cDigAmPm"></div>
  
*/

}, 1000);



 // console.log("Hit")
  //!!
})



/*

$("#d1 p").fadeOut(500)
    .delay(600)
    .queue(function(n) {
        $(this).html("hahahhaha");
        n();
    }).fadeIn(500);​

*/





//}

/*
  setInterval(function() {
  

    for (var i = 0; i < 10; i++) {
  
      var tDiv = '#sec' + i

      $(tDiv).css('background-color', '#CCC')

    }

        // $("#cDigital").html(getHMS().hr + ":" + getHMS().mn + ":" + getHMS().sc + " " + getHMS().ap)

    // var clr = '#' + (getHMS().hr).toString(16) + (getHMS().mn).toString(16) + (getHMS().sc).toString(16)

    // 
  
  }, 1000);


 */







