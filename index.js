const message = {
  messageStart: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
  messageMiddle: ["Truth may be perception, but you're just a freaking liar. The Feds want to talk about your surfing habits. Baked goods are in abundance. You thought everyone forgot about it, but they didn't. Hiding your feelings is like sticking a melon baller down your pants. It’s cold and awkward, but after a while you get used to it. Pull out those emotions and run them through the dishwasher before you share.",
  "You can accomplish anything, as long as it's painfully easy. You have seen Jerry Garcia’s image in your Froot Loops at least once. Froot Loops is your cereal. Your next career: Sad Clown Painter. Your gas problem is not going unnoticed. You may feel fit as a fiddle, but from the back you resemble a double bass. Head to the gym for a musical workout if you want someone to pluck your strings again",
  "The cleaning lady is spitting in your sock drawer. You use interpretive dance to describe philosophical concepts. Your next career: Master Level Ferris Wheel Operator. There are bodies in your trunk. You’re looking good and feeling sassy on Wednesday. That new shirt will earn you some free drinks and envious glares from everyone in the office. Bask in your own glory.", 
  "Face facts, you are a hilarious drunk. You use pointers and elaborate charts to describe philosophical concepts. Your next Career: Seat Filler. A windfall of lunchmeat awaits. Some people are born to greatness, others have it thrust upon them, usually when the world has them bent over backwards and slightly drunk. Watch out if greatness gives you the eye at a party.",
  "Stick to tea. Coffee is making the tumor bigger. You claim to want “honest criticism” of you work. Then You commit hara-kiri on the floor when people say they don’t like it. Your next Career: Ferret Groomer. You will develop an attractive skin condition. Just when you finally have all the answers, someone has changed all the questions. Don’t look at it as starting over, consider yourself a certified expert in Crap No One Else Wants To Know."
  ],
  messageEnd: ['Have an amazing day',
              'Have an incredible day',
              'May the luck be with you'],

  generate() {
    let start = this.messageStart[Math.floor(Math.random() * this.messageStart.length)]
    let middle = this.messageMiddle[Math.floor(Math.random() * this.messageMiddle.length)]
    let end = this.messageEnd[Math.floor(Math.random() * this.messageEnd.length)]
    return `${start}\n\n${middle}\n\n${end}`
  },
}

console.log(message.generate())