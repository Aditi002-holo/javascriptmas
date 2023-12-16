const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const inputName = document.getElementById("input-name")
const beenGood = document.getElementById("been-good")
const btn = document.getElementById("btn")

btn.addEventListener("click", sortTheList)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

function sortTheList() {
    let niceListArr = sorteesArr.filter(eachKid => {
        if(eachKid.hasBeenGood) return eachKid
    })
    
    let naughtyListArr = sorteesArr.filter(eachKid => {
        if(!eachKid.hasBeenGood) return eachKid
    })
    
    niceList.innerHTML = niceListArr.map(eachKid => {
        return `<li>${eachKid.name}</li>`
    }).join('')
    
    naughtyList.innerHTML = naughtyListArr.map(eachKid => {
        return `<li>${eachKid.name}</li>`
    }).join('')
}



/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/