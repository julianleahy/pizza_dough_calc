
// CALCULATE AMOUNTS CONTROLLER
let calcController = (() => {

  // Calculating Amounts

})();

// UI CONTROLLER
let UIController = (() => {

  // UI Stuff



})();

// GLOBAL APP CONTROLLER
let appController = ((calcCtrl, UICtrl) => {

  let clickEvent = () => {
    console.log('OK');
  }

  // 1. Listen for click event on pizza btn
  document.getElementById('calculate').addEventListener('click', clickEvent)
  // 1b. Handle return / enter
  document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') clickEvent();
  });

  // 2: Get field input data

  // 3: Calculate ingredient amounts

  // 4: Update UI

})(calcController, UIController);

