
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

      // convert weight back for UI string
      switch (size) {
        case '200':
          size = 'small';
          break;
        case '250':
          size = 'medium';
          break;
        default:
          size = 'large';
          break;
      }

      // Return calculated ingredients based on weight
      // Round up all ingredients except yeast as irrelavant
      return {
        flour: Math.floor(percentage.flour * weight),
        water: Math.floor(percentage.water * weight),
        salt: Math.floor(percentage.salt * weight),
        yeast: (percentage.yeast * weight).toFixed(2),
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
    },
    updateFields: (ingObj) => {

      // Update fields
      // add or remove plural depending if 1 or more
      ingObj.numPizzas == 1 ? document.getElementById('pizza').textContent = 'pizza' : document.getElementById('pizza').textContent = 'pizzas'
      // Heading
      document.getElementById('numPiz').textContent = ingObj.numPizzas;
      document.getElementById('size').textContent = ingObj.size;
      // Ingredients
      document.getElementById('flour').textContent = ingObj.flour;
      document.getElementById('water').textContent = ingObj.water;
      document.getElementById('salt').textContent = ingObj.salt;
      document.getElementById('yeast').textContent = ingObj.yeast;
    }
  }



})();

// GLOBAL APP CONTROLLER
let appController = ((calcCtrl, UICtrl) => {


  // 2: Get field input data
  let clickEvent = () => {
    // Destructure returned object
    const { numPizzas, sizePizza } = UICtrl.getInputData();
    // 3: Get calculated values
    const ingredients = calcCtrl.calculate(numPizzas, sizePizza);
    // 4: Update UI
    UICtrl.updateFields(ingredients);
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

})(calcController, UIController);

appController.init();

