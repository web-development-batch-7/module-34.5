const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};

const personCount = document.getElementById('personCount').innerText = person.message
const personName1 = document.getElementById('personName1').innerText = person.result[0].name.common
const personName2 = document.getElementById('personName2').innerText = person.result[1].name.common
const age1 = document.getElementById('age1').innerText = 'Age : ' + person.result[0].age
const age2 = document.getElementById('age2').innerText = 'Age : ' + person.result[1].age
const street1 = document.getElementById('street1').innerText = 'Street : ' + person.result[0].address.street
const street2 = document.getElementById('street2').innerText = 'Street : ' + person.result[1].address.street


