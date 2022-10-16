const billValue = document.querySelector('#bill-value')
const cashValue = document.querySelector('#cash-value')
const amount = document.querySelectorAll('.amount')
const btnCalculate = document.querySelector('#btn-calculate')
const outerText = document.querySelector('#output-text')

btnCalculate.addEventListener('click', calculateChangeHandler)

const notes = [2000, 500, 100, 20, 10, 5, 1]

function toBeReturned(bill, cash) {
  return cash - bill
}

function resetTable() {
  for (let i = 0; i < notes.length; i++) {
    amount[i].innerText = ''
  }
}

function billLessThanCash() {
  outerText.innerText = 'Cash provided should be greater than the bill amount'
  outerText.style.color = 'red'
  resetTable()
  return
}

function calculateChangeHandler() {
  const bill = billValue.value
  const cash = cashValue.value
  outerText.innerText = ''

  if (parseFloat(bill) > 0 && parseFloat(cash) > 0) {
    if (bill == cash) {
      outerText.innerText = 'Perfect! Nothing to return'
      outerText.style.color = 'blue'
      resetTable()
    } else {
      var change = bill < cash ? toBeReturned(bill, cash) : billLessThanCash()

      if (change) {
        for (let i = 0; i < notes.length; i++) {
          const notesDenom = parseInt(change / notes[i])
          change = change % notes[i]
          amount[i].innerText = notesDenom
        }
      }
    }
  } else {
    outerText.innerText = 'Please enter valid details'
    outerText.style.color = 'red'
  }
}
