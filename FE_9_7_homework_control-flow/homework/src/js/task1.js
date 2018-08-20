// Your code goes here
let login = prompt('Enter your login', '');
let pass;

if(check_login(login)){
pass = prompt('Enter your password')

if(check_pass(pass)){
    let hour = new Date().getHours();
    if( hour < 20){
    alert('Good day!');
    }else{
    alert('Good evening');
    }
}
}

function check_login(login){
    if(login === '' || login === null){
        alert('Canceled.');
        return false;
    }

    if(login.length < 4){
        alert('I don\'t know any users having name length less than 4 symbols');
        return false;
    }

    if(login === 'User'){
        return true;
    }else{
        alert('I don`t know you.')
        return false;
    }
}

function check_pass(pass){
    if(pass === '' || pass === null){
        alert('Canceled.');
        return false;
    }

    if(pass === 'SuperUser'){
        return true;
    }else{
        alert('Wrong password')
        return false;
    }

}