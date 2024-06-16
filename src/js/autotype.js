import Typed from 'typed.js';

const typed = new Typed('.herospan', {
    strings: ['Your Trusted Partner', 'Protecting Your Future', 'One Policy at a Time'],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 500, // Default delay before backspacing
    loop: true, // Ensure the text repeats indefinitely
    preStringTyped: function(pos, self) {
     if (self.strings[pos] === 'Your Trusted Partner') {
      self.backDelay = 1000; // 4 seconds delay for 'next'
     } else if (self.strings[pos] === 'Protecting Your Future') {
      self.backDelay = 3000; // 3 second delay for 'next'
     } else if (self.strings[pos] === 'One Policy at a Time') {
      self.backDelay = 3000;  // Default delay for 'next'
     }
    }
 });
