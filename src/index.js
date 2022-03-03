const messages = [
    "hola",
    "Erik",
    "Nicolai",
    "Kenlly",
    "Maria",
    "Darius",
    "Paula"
];

const random = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { random };