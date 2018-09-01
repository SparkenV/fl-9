function userCard(cardIndex) {
  
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = cardIndex;
  
    function getTaxed(number){
        const tax = 0.5;
        const hundredPersent = 100;
        number -= number * tax / hundredPersent;
        return number;
    }
    
    function addHistoryLogs(description, number, date){
        historyLogs.push({
            'operationType': description,
            'credits': number,
            'operationTime': date 
        })
    }
  
    return {

    getCardOptions: function(){
        console.log({
        'key': key,
        'balance': balance,
        'transactionLimit': transactionLimit,
        'historyLogs': historyLogs
        })
    },
  
    putCredits: function(sum){
        balance += sum;
        addHistoryLogs('Received credits', sum, new Date().toLocaleString('en-GB'));
    },
  
    takeCredits: function(sum){
        if(sum < balance || sum < transactionLimit){
            balance -= sum;
            addHistoryLogs('Withdrawal credits', sum, new Date().toLocaleString('en-GB'));
        }else{
            console.log('Operation is not possible!\nNot enough money on the card or credits limit exceeded.');
        }
    },
  
    setTransactionLimit: function(sum){
        transactionLimit = sum;
        addHistoryLogs('Transition limit change', sum, new Date().toLocaleString('en-GB'))
    },
  
    transferCredits: function(sum, card){
        if(sum < balance || sum < transactionLimit){
            balance -= sum;
            card.putCredits(getTaxed(sum));
        }else{
            console.log('Operation is not possible!\nNot enough money on the card or credits limit exceeded.');
        }
    }
  }
}
  
class UserAccount{
    constructor(name){
      this.userName = name;
      this.listOfCards = [];
      this.maximumNumberOfCards = 3;
    }
    
    addCard(){
        if (this.listOfCards.length < this.maxNumberCards) {
            this.listOfCards.push(userCard(this.listOfCards.length));
        } else {
            console.log('Can not create!\nYou can not have more cards.');
        }
    }
  
    getCardByKey(key){
        return this.listOfCards[key - 1];
    }
  }

