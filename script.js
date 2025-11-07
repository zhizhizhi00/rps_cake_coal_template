alert('welcome to JavaScript!');
let username = prompt('please enter your user name');


document.getElementById('username').textContent = username; 

alert('welcome ' + username + '!')
alert('you are going to play rock paper scissors vs a computer')
alert('if you win, you receive a cake, lose, receive coal!')

document.getElementById('game').addEventListener('click',(e) => {
    globalThis
        choice = prompt('choose one: rock, paper, or scissors')
    play_rps();
})
document.getElementById('rock').addEventListener('click',(e) => {
    globalThis
        choice = 'rock'
    play_rps();
})
document.getElementById('paper').addEventListener('click',(e) => {
    globalThis
        choice = 'paper'
    play_rps();
})
document.getElementById('scissors').addEventListener('click',(e) => {
    globalThis
        choice = 'scissors'
    play_rps();
})

function play_rps()
{


    while (choice != 'rock' && choice != 'paper' && choice != 'scissors')
    {
        alert('invalid choice!')
        choice = prompt('choose one: rock, paper, or scissors')
    }

    computer_choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * computer_choices.length);
    computer_choice = computer_choices[randomIndex]


    let coal = document.createElement('img');
    coal.src = './assets/coal.jpg';
    coal.width = 200; 
    coal.height = 200;


    let cake = document.createElement('img');
    cake.src = './assets/cake_image.jpg';
    cake.width = 200;
    cake.height = 200;


    
    //globalThis
        function result(a)
        {
            alert(a + b)
        }




    if (computer_choice == choice)
    {
        a='draw!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(coal)
    }
    else if (computer_choice == 'rock' && choice == 'paper')
    {
        a='win!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(cake)
        sound.play()
    }
    else if (computer_choice == 'rock' && choice == 'scissors')
    {
        a='lose!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(coal)
        sound.play()
    }
    else if (computer_choice == 'paper' && choice == 'rock')
    {
        a='lose!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(coal)
        sound.play()
    }
    else if (computer_choice == 'paper' && choice == 'scissors')
    {
        a='win!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(cake)
        sound.play()
    }
    else if (computer_choice == 'scissors' && choice == 'paper')
    {
        a='lose!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(coal)
        sound.play()
    }
    else if (computer_choice == 'scissors' && choice == 'rock')
    {
        a='win!'
        b=choice
        result (a,b)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(cake)
        sound.play()
    }
    else
        alert('ovo')
}
     


       const sound = new Audio('./assets/boing.mp3') 
        document.addEventListener('keydown', (e) => { 
        if (e.key === 'g') 
        sound.play(); 
        }) 





