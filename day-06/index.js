const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]
const personInput = document.querySelector('.person')
const showSantaBtn = document.querySelector('.show-secret-santa')
const showSantaDiv = document.querySelector('.secret-santa')

function generateSecretSantaPairs(arr) {
    let secretSantas = {}
    for(let i = 0; i < arr.length; i++) {
        secretSantas[arr[i]] = (i === arr.length-1) ? secretSantas[arr[i]] = arr[0] : secretSantas[arr[i]] = arr[i+1]
    }
    return secretSantas
}

showSantaBtn.addEventListener('click', function() {
    const secretSantas = generateSecretSantaPairs(people)
    for(let i = 0; i < people.length; i++) {
        if(personInput.value === people[i]) {
            showSantaDiv.innerHTML = `<p>${secretSantas[people[i]]}</p>`
            personInput.value = ''
        }
    }
    setTimeout(function() {
        showSantaDiv.innerHTML = ''
    }, 2000)
})