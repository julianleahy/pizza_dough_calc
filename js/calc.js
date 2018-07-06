
// CALCULATE AMOUNTS CONTROLLER
let calcController = (() => {

  // Calculating Amounts

})();

// UI CONTROLLER
let UIController = (() => {

  return {
    getInputData: () => {

      let numPizzas = document.getElementById('num-pizzas').value;
      let sizePizza = document.getElementById('size-pizza').value;

      return {
        numPizzas: numPizzas,
        sizePizza: sizePizza
      }
    }
  }



})();

// GLOBAL APP CONTROLLER
let appController = ((calcCtrl, UICtrl) => {

  let clickEvent = () => {
    let { numPizzas, sizePizza } = UICtrl.getInputData();
    console.log(`${numPizzas} ${sizePizza} pizza`);
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

