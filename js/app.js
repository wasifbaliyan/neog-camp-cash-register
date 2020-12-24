function cashRegister(notesAccepted, billAmount, cashPaid) {
  if (cashPaid < billAmount) {
    return "Cash paid is less than the bill amount!";
  }
  const cashToReturn = cashPaid - billAmount;
  const notes = {};
  let bill = cashToReturn;

  for (let i = 0; i < notesAccepted.length; i++) {
    if (bill % notesAccepted[i] === billAmount) {
      notes[notesAccepted[i]] = 0;
    } else {
      notes[notesAccepted[i]] = Math.floor(bill / notesAccepted[i]);
      bill = bill % notesAccepted[i];
    }
  }
  return notes;
}

const notesAccepted = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

const billAmount = 33322;
const cashPaid = 89998;
console.log(cashPaid - billAmount);

console.log(cashRegister(notesAccepted, billAmount, cashPaid));
