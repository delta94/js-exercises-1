const { Observable } = Rx;

const theButton = document.getElementById("exercise-3");
const clickStream = Observable.fromEvent(theButton, "click");

const myObserver = {
  next: console.log,
  error: console.error,
  complete: () => console.info('complete')
};

clickStream
.map((val, index) => "Dog #" + (index + 1))
.filter((val, index) => index % 2 === 0)
.subscribe(myObserver);

/* 
  Exercise 3:
  We've created an Observable stream from the button's click event. This time, every other click should give us a "dog". 
  As we did in the last exercise, use one of the RxJS methods to map each emitted value from a click event to a string instead.
  Use another RxJS method to filter the stream so that we only use every other emission. 
  Subscribe to the stream and print out the emitted value.

  Expected output:
    "Dog #1" after the first click, 
    No output after the second click,
    "Dog #3" after the third click, 
    No output after the fourth click,
    "Dog #5" after the fith click, and so on.
*/
