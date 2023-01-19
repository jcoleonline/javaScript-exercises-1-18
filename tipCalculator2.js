function tipAmount(amount, service){
   
    if (service === 'good'){
        return amount*.20+amount

    } else if (service === 'fair'){
        return amount*.15+amount

    } else if (service === 'bad'){
        return amount*.10+amount
    }
}

result = tipAmount(100,'bad')
console.log(result)
