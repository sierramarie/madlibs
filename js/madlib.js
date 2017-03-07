var noun = 'cookie'
var place = 'San Francisco'
var animal = 'komono dragon'
var adjective = 'furry'
var verb = 'skipped'
var noun2 = 'mushroom'
var pluralnoun = 'puppies'
var adjective2 = 'sparkling'
var verb2 = 'swam'
var place2 = 'The Iron Yard'
var noun3 = 'Jennifer'
var adjective3 = 'smart'
var verb3 = 'float'
var emotion = 'jubalant'
var animal3 = 'swan'
var adjective4 = 'grumpy'
var pluralnoun2 = 'glasses'
var place3 = 'Hawaii'
var verb4 = 'sleep'
var noun4 = 'pillow'
var noun5 = 'microphone'
var noun6 = 'giraffe'
var verb5 = 'meander'
var verb6 = 'plays'
var pluralnoun3 = 'wires'
var verb7 = 'walk'
var verb8 = 'typed'
var verb9 = 'laugh'
var emotion2 = 'sad'
var noun7 = 'straw'

var story = `One day an ${noun} wandered into a ${place} in search of friends. 
He saw a ${animal} on a tree. 
“Will you be my friend?" asked the ${noun}. 
Replied the ${animal}, “You are too ${adjective}. You can not ${verb} from trees like me." 
Next, the ${noun} met a ${noun2}. He asked him to be his ${pluralnoun}. 
But the ${noun2} said, “You are too ${adjective2} to ${verb2} in my ${place2}!" 
Then the ${noun} met a ${noun3}. 
“Will you be my friend? He asked. 
“How can I?" asked the ${noun3}. 
“You are too ${adjective3} to ${verb3} about like me." 
The ${noun} was ${emotion}. He met a ${animal3} next. 
“Will you be my friend?" he asked the ${animal3}. 
The ${animal3} said, “Sorry, sir, you are too ${adjective4}." 
The next day, the ${noun} saw all the ${pluralnoun2} in the ${place3} ${verb4} for their ${noun4}. 
The ${noun} asked them what the matter was. 
The ${noun5} replied, “There is a ${noun6} in the ${place3}. He’s ${verb5} to ${verb6} us all up!" 
The ${pluralnoun3} all ${verb7} away to hide. 
The ${noun} wondered what he could do to solve everyone in the ${place3}. 
Meanwhile, the ${noun6} kept ${verb8} up whoever he could ${verb9}. 
The ${noun} walked up to the ${noun6} and said, “Please, Mr. ${noun6}, do not ${verb8} up these poor ${pluralnoun3}." 
“Mind your own business!" growled the ${noun6}. 
The ${noun} has a no choice but to give the ${noun6} a hefty kick. 
The ${emotion} ${noun6} ran for his life. 
The ${noun} ambled back into the ${place2} to ${verb} the good news to everyone. 
All the ${pluralnoun3} thanked the ${noun}.
They said, “You are just the right size to be our ${noun7}."` 

// I CANT GET MY FREAKIN STORY TO LOAD 


console.log(story);


function avow(description, assertion, context) {
  var log = console.log.bind(console)
  var isBrowser = typeof window != 'undefined'
  var isAssertionGroup = typeof assertion === 'function' || arguments.length === 1
  var isAssertion = !isAssertionGroup
  var isPass = assertion
  var showContext = isAssertion && !isPass && context

  if (isAssertionGroup) {
    log('')
    isBrowser?
    log('%c> ' + description, 'font-weight: bold; color: goldenrod;'):
    log('\x1b[1m\x1b[33m> ' + description + '\x1b[22m\x1b[0m')
    isPass? assertion() : undefined
  }

  else if (isAssertion) {
    isBrowser?
    log('[%c' + (isPass? 'PASSED' : 'FAILED') + '%c] %c ' + description, 'font-weight: bold; color: ' + (isPass? 'green' : 'red') + ';', 'font-weight: normal; color: inherit;', 'color: darkcyan;'):
    log('[\x1b[1m' + (isPass? '\x1b[32mPASSED' : '\x1b[31mFAILED') + '\x1b[22m\x1b[0m]\x1b[36m ' + description + '\x1b[0m')
  }

  if (showContext) {
    isBrowser?
    log('%cFailure Context...', 'color: red;'):
    log('\x1b[31mFailure Context...\x1b[0m')
    console.dir(context)
  }
}