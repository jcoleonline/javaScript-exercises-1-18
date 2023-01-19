function tipAmount(amount, service, people){
   
    if (service === 'good'){
        return (amount*.20+amount)/people

    } else if (service === 'fair'){
        return (amount*.15+amount)/people

    } else if (service === 'bad'){
        return (amount*.10+amount)/people
    }
}

result = tipAmount(100,'fair', 3)
console.log(result)