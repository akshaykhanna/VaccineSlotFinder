function recVacAlert(age = 18, minNoOfVac = 3, delay = 5000) {
  let attempt = 0;
  function bookSlot(element) {
    console.log(`Booking slot for ${age}+ vaccine, in attempt: ${attempt}`)
    element.click();
    const firstTimeSlot = document.getElementsByClassName('time-slot')[0];
    firstTimeSlot.click();
  }
  function vaccAlert(age = 18) {
    // debugger;
    console.log(`Looking for ${age}+ vaccine, attempt: ${++attempt}`);
    const searchButton = document.getElementsByClassName('pin-search-btn')[0];
    searchButton && console.log(`Clicking search btn`);
    searchButton.click();
    if(age >= 45) {
      const button45Plus = document.getElementById('c2');
      button45Plus.click();

    } else {
      const button18Plus = document.getElementById('c1');
      button18Plus.click();
    }
    document.querySelectorAll('[href="/appointment"]').forEach( p => {
      const noOfVacs = +p.innerText;
      console.log(noOfVacs);
      noOfVacs && console.log(`Got ${noOfVacs} vaccines`);
      if(noOfVacs && noOfVacs >= minNoOfVac) {
        debugger;
        clearInterval(timer);
        bookSlot(p);
        // alert(`${noOfVacs} vaccines avialable for ${age} plus`);
        // clearInterval(timer);
        return;
      }
     })
  }
  let timer = setInterval(() => vaccAlert(age), delay);
}

