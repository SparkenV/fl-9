function userCard(cardIndex) {
  
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = cardIndex;
    let tax = 0.5;
    let hundredPercent = 100;

    function getTaxed(number){
        const tax = 0.5;
        const hundredPersent = 100;
        const numberWithoutNumber = number * tax / hundredPersent;
        return numberWithoutNumber;
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

            addHistoryLogs('Withdrawal credits', sum, new Date().toLocaleString('en-GB'));
            balance -= sum;

    },
  
    setTransactionLimit: function(sum){
        transactionLimit = sum;
        addHistoryLogs('Transition limit change', sum, new Date().toLocaleString('en-GB'))
    },
  
    transferCredits: function(sum, card){
        const sumPlusTaxes = sum * tax / hundredPercent + sum;

        if (sumPlusTaxes > balance) {
            console.log(`Error: You can't transfer credits - balance exceeded.`);
        } else if (sumPlusTaxes > transactionLimit) {
            console.log(
                `Error: You can't transfer credits - transaction limit exceeded.`);
        } else {
        this.takeCredits(sumPlusTaxes);
        card.putCredits(sum);
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
        if (this.listOfCards.length < this.maximumNumberOfCards) {
            this.listOfCards.push(userCard(this.listOfCards.length + 1));
        } else {
            console.log('Can not create!\nYou can not have more cards.');
        }
    }
  
    getCardByKey(key){
        return this.listOfCards[key - 1];
    }
  }

