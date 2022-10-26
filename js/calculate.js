let billInput = document.getElementById('bill')
let tipInput = document.getElementById('tip')
let person = document.getElementById('noofpeople')
let perPerson = document.getElementById("person")

function calculateTip() {
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value) / 100
    const tip = Number(bill * tipPercent)
    const total = Number(bill + tip)
    const personSplit = Number(person.innerText)
    const SplitPerson = Number(Number(total) / personSplit)
    perPerson.innerText = "$" + SplitPerson.toLocaleString('en-US')
    
}


person.addEventListener('change', () => {
    calculateTip()
})
