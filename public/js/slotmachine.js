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
      Slots.generateNumber("jackpot");
      
      $('#pull-button').on('click', this.pullSlotMachine);
    },
    pullSlotMachine: function() {
      this.leftSlot = Slots.generateNumber("slotNumber");
      this.middleSlot = Slots.generateNumber("slotNumber");
      this.rightSlot = Slots.generateNumber("slotNumber");
      
      $('#left-screen h1').html(this.leftSlot);
      $('#middle-screen h1').html(this.middleSlot);
      $('#right-screen h1').html(this.rightSlot);
    }
  });
  
  var slotMachine = new Slots();
  
  slotMachine.initialize();

});