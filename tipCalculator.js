function tipAmount(amount, service){
   
    if (service === 'good'){
        return amount*.20

    } else if (service === 'fair'){
        return amount*.15

    } else if (service === 'bad'){
        return amount*.10
    }
}

result = tipAmount(100,'fair')
console.log(result)
