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
  // Assign DOM strings to an object to allow scalability
  let DOMStrings = {
    numberOfPizzas: 'num-pizzas',
    pizzaSize: 'size-pizza',
    pizzaText: 'pizza',
    headingNumPizza: 'numPiz',
    headingSizePizza: 'size',
    flour: 'flour',
    water: 'water',
    salt: 'salt',
    yeast: 'yeast',
    calcBtn: 'calculate'
  }

  return {
    getInputData: () => {
      return {
        numPizzas: document.getElementById(DOMStrings.numberOfPizzas).value,
        sizePizza: document.getElementById(DOMStrings.pizzaSize).value
      }
    },
    updateFields: (ingObj) => {

      // Update fields
      // add or remove plural depending if 1 or more
      ingObj.numPizzas == 1 ? document.getElementById(DOMStrings.pizzaText).textContent = 'pizza' : document.getElementById(DOMStrings.pizzaText).textContent = 'pizzas'
      // Heading
      document.getElementById(DOMStrings.headingNumPizza).textContent = ingObj.numPizzas;
      document.getElementById(DOMStrings.headingSizePizza).textContent = ingObj.size;
      // Ingredients
      document.getElementById(DOMStrings.flour).textContent = ingObj.flour;
      document.getElementById(DOMStrings.water).textContent = ingObj.water;
      document.getElementById(DOMStrings.salt).textContent = ingObj.salt;
      document.getElementById(DOMStrings.yeast).textContent = ingObj.yeast;
    },
    // Allow public access to DOM strings
    domStrings: () => {
      return DOMStrings
    }
  }

})();

// GLOBAL APP CONTROLLER
let appController = ((calcCtrl, UICtrl) => {

  let DOMStrings = UICtrl.domStrings();


  // 2: Get field input data
  let clickEvent = () => {
    // Destructure returned object
    const {
      numPizzas,
      sizePizza
    } = UICtrl.getInputData();
    // 3: Get calculated values
    const ingredients = calcCtrl.calculate(numPizzas, sizePizza);
    // 4: Update UI
    UICtrl.updateFields(ingredients);
  }

  // add an init function
  return {
    init: () => {
      // 1. Listen for click event on pizza btn
      document.getElementById(DOMStrings.calcBtn).addEventListener('click', clickEvent)
      // 1b. Handle return / enter
      document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') clickEvent();
      });
    }
  }

})(calcController, UIController);

appController.init();