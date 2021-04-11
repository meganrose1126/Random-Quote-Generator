const quotes = [
   `"I've learned that people will forget what you said, people will forget what you did, but they will never forget how you made them feel" -Maya Angelou`,
   `"Just believe in yourself. Even if you don't, pretend you do and, at some point, you will." -Venus Williams`,
   `"The scariest moment is always just before you start." - Stephen King`,
   `"Different roads often lead to beautiful destinations." -Unknown`,
   `"Learn to sell. Learn to build. If you can do both, you will be unstoppable." -Naval Ravikant`,
   `"Learn to be calm and you will always be happy." -Paramahansa Yogananda`,
   `"It will be the toughest thing you'll ever do, but your heart is never wrong." -Maxime Lagace`,
   `"Sometimes you will never know the value of a moment, until it becomes a memory." - Dr. Seuss`,
   `"If you're always trying to be normal you will never know how amaxing you can be." -Maya Angelou`,
   `"People being to be successful the minute they decide to be." -Harvey Mackay`,
   `"You are braver than you believe. and stronger than you seem, and smarter than you think." -Christopher Robin`,
   `"The harder you work for something, the greater you'll feel when you acheive it." -unknown`,
   `"Life is what happens when you're busy making other plans" -John Lennon`,
   `"A successful man is one who can lay a firm foundation with the bricks others have thrown at him." -David Brinkley`,
   `"Great minds discuss ideas; average minds discuss events; small minds discuss people." -John F. Kennedy`
];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}