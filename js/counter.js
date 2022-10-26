const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const noofpeople = document.getElementById('noofpeople')

let count = 0

function increment() {
    count += 1
    noofpeople.innerText = count
}

function decrement() {
    count -= 1
    noofpeople.innerText = count
}
