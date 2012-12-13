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
      this.intervalId = null;
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
      function flip() {
        var randNum = Slots.generateNumber("slotNumber");
        $('#left-screen').fadeOut(100)
                         .html(randNum)
                         .fadeIn(100);

      }
      this.intervalId = setInterval(flip, 200);
    }
  });
  
  var slotMachine = new Slots();
  
  slotMachine.initialize();

});