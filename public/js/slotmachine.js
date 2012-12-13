$(document).ready(function() {
  //alert("bobby");
  var Slots = Slots || function() {};
  
  $.extend(Slots, {
    create: function() {
      return new Slots().run();
    },
    generateNumber: function(criteria) {
      // generates a random number from 0-9
      if(criteria === "slotNumber"){
        var randomNumber = Math.floor(Math.random() * 10);
        return randomNumber;
      }
      else{
        var randomNumber = Math.floor(Math.random() * 10000);
        return randomNumber;          
      }
    }
  });
  
  $.extend(Slots.prototype, {
    initialize: function() {
      this.leftSlot = null;
      this.middleSlot = null;
      this.rightSlot = null;
      
      // Countdowns
      this.leftCountdown = null;
      this.middleCountdown = null;
      this.rightCountdown = null;
      this.jackpot = 0;
      
      $('#pull-button').on('click', this.pullSlotMachine);
    },
    pullSlotMachine: function() {
      var interval = 100;
      
      function doTimeout(intervalId) {
        clearInterval(intervalId);
      }
      function flip(position) {
        var randNum = Slots.generateNumber("slotNumber");
        var screen = $('#' + position + '-screen h1').fadeOut(interval);
        screen.queue("fx", function(next) {
          screen.html(randNum);
          next();
        });                 
        screen.fadeIn(interval);
        
        interval += 50;
      }
      
      function animateScreen(position) {
        var iId = setInterval(function() { flip(position); }, 200);
        setTimeout(function() {
          doTimeout(iId);
        }, 1500);
      }
      
      animateScreen('left');
      animateScreen('middle');
      animateScreen('right');
    }
  });
  
  
  var slotMachine = new Slots();
  
  
  slotMachine.initialize();

});