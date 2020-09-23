const { RSA_SSLV23_PADDING } = require('constants');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


r1.question('What is your name? ', (name) => {

  r1.question('What is an activity you like doing? ', (activity) => {

    r1.question('What do you listen to while doing that? ', (music) => {

      r1.question('Which meal is your favorite (eg. dinner, brunch, etc)? ', (meal) => {

        r1.question('What is your favorite thing to eat for that meal? ', (food)=> {

          r1.question ('Which sport if your absolute favorite? ', (sport) => {

            r1.question ('What is your superpower? ', (superpower)=> {

              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`)
             
              r1.close();
            })
          })
        })
      })
    })
  })
})