const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const header = document.querySelector('h1')

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
  elf.textContent += "🧝"
  header.textContent = `Not Lonely Anymore!!`
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/