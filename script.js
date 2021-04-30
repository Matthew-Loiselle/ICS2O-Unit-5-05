let length = 0
let product = 0

document.getElementById('calculate').addEventListener('click', multiplication)

function multiplication () {
  length = document.getElementById('input').value
  product = length * length
  alert(product)
}