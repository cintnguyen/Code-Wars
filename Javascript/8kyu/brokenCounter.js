// 8 kyu
// Broken Counter

// Our counter prototype is broken. Can you spot, what's wrong here?

// Solution - In JavaScript, when adding methods to a prototype, the syntax does not use parentheses (() after the method name). Your code mistakenly uses Counter.prototype.increase() instead of Counter.prototype.increase

function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function () {
    this.value++;
};

Counter.prototype.getValue = function () {
    return this.value;
};

Counter.prototype.reset = function () {
    this.value = 0;
};



function Counter() {
    this.value = 0;
  }
  
  Counter.prototype = {
    increase : function(){this.value++;},
    getValue : function(){ return this.value;},
    reset : function(){this.value = 0;}
};