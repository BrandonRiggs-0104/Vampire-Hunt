const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]


function drawPeople() {
  for (let i = 0; i < people.length; i++) {
    let location = randomLocation()
    const person = people[i];
    // console.log(person.picture);
    document.getElementById(location).innerText += person.picture
  }
}

function makeAHunter() {
  let randomNumber = Math.floor(Math.random() * people.length)
  console.log('random number', randomNumber);
  let randomPerson = people[randomNumber]
  randomPerson.isHunter = true
  // console.log('random person', randomPerson);
}
function randomLocation(){
  let randomLocation = Math.floor(Math.random() * locations.length)
  // console.log('random location', randomLocation);
  let randomPerson = locations[randomLocation]
  // console.log('random location', randomPerson);
  return randomPerson
}

function attackedLocation() {
  let turned = '🦇'
  let peopleAtLocation = people.filter(people => people.picture == turned)
}



drawPeople()
makeAHunter() 
randomLocation()