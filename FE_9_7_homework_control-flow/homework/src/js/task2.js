// Your code goes here
let agree = confirm('Do you want to play a game?');
let max_in_range = 5;
let prize = 0;
let max_prize = 10;
let avg_prize = 5;
let min_prize = 2;
let prizes = [max_prize, avg_prize, min_prize];

const info = (max, attempts_left, prize, possible_prize) => `
Enter a number from 0 to ${max}
Attempts left: ${attempts_left}
Total prize: ${prize}$
Possible prize on current attempt: ${possible_prize}$`;

if(!agree){
alert('You did not become a millionaire, but can.');
}else{
    play_in_game();  
}

function play_in_game(){
    let random_number = get_random_value(max_in_range)
    console.log(random_number);
    let user_number;
    
    for(let i = 0; i < 3; i++){
        user_number = get_a_number(i, prizes[i]);
        if(user_number === random_number){
            prize += prizes[i];
            congratulations();
            return ;
        }
    }
    game_over();
    return;
}

function get_random_value(num){
    return Math.floor(Math.random() * ++num);
}

function increase_prizes_and_range(){
    for(let i = 0; i < 3; i++){
        prizes[i] = prizes[i]*3;
    }
    max_in_range *= 2;
}

function get_a_number(attempts_left, possible_prize){
    return parseFloat(prompt(info(max_in_range, attempts_left, prize, possible_prize)));
}

function congratulations(){
    let contin = confirm('Congratulation!   Your prize is:'+ prize + '\nDo you want to continue?')
    if(contin){
        increase_prizes_and_range();
        play_in_game();
    }else{
        game_over();
    }
}
    
function game_over(){
        alert('Thank you for a game. Your prize is: '+prize);
        if(confirm('\nDo you want to play again?')){
            location.reload();
        }
}