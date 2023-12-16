/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
Vegan: Vegan Hummus Cheese Platter
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

// food, guests, vegetarian-input

const calcBtn = document.getElementById('btn')
const dinner = document.getElementById('food')
const guestCount = document.getElementById('guests')

calcBtn.addEventListener('click', function() {
    if(document.getElementById('vegetarian-input').checked) {
        dinner.textContent = 'Winter Squash Risotto'
    } else if(document.getElementById('vegan-input').checked) {
        dinner.textContent = 'Vegan Hummus Cheese Platter'
    } else {
        dinner.textContent = (guestCount.value < 5) ? 'Ham' : 'Turkey'
    }
})


