
// CALCULATE AMOUNTS CONTROLLER
let calcController = (() => {

  // Calculating Amounts

})();

// UI CONTROLLER
let UIController = (() => {

  return {
    getInputData: () => {
      return {
        numPizzas: document.getElementById('num-pizzas').value,
        sizePizza: document.getElementById('size-pizza').value
      }
    }
  }



})();

// GLOBAL APP CONTROLLER
let appController = ((calcCtrl, UICtrl) => {


  // 2: Get field input data
  let clickEvent = () => {
    // Destructure returned object
    const { numPizzas, sizePizza } = UICtrl.getInputData();
    console.log(`${numPizzas} ${sizePizza} pizzas`);
  }

  // add an init function
  return {
    init: () => {
      // 1. Listen for click event on pizza btn
      document.getElementById('calculate').addEventListener('click', clickEvent)
      // 1b. Handle return / enter
      document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') clickEvent();
      });
    }
  }


  // 3: Calculate ingredient amounts

  // 4: Update UI

})(calcController, UIController);

appController.init();

