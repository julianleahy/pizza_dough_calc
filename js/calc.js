
// CALCULATE AMOUNTS CONTROLLER
let calcController = (() => {

  // Percentage of overall weight
  const percentage = {
    flour: 0.625,
    water: 0.356,
    salt: 0.0178,
    yeast: 0.0012
  }

  return {
    calculate: (num, size) => {
      let weight = num * size;

      // Return calculated ingredients based on weight
      // Round up all ingredients except yeast as irrelavant
      return {
        flour: Math.floor(percentage.flour * weight),
        water: Math.floor(percentage.water * weight),
        salt: Math.floor(percentage.salt * weight),
        yeast: percentage.yeast * weight,
        numPizzas: num,
        size: size
      }
    }
  }

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
    const ingredients = calcCtrl.calculate(numPizzas, sizePizza);

    console.log(ingredients);
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

