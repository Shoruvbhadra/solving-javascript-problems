// Github repo link: 


// 1. Kilometer to meter converter. 
function kilometerToMeter (input){
    if(input<=0){
        console.log("Eror! This is not possible")
    }else{
        toMeter = input * 1000;     //1km = 1000m.  
    }
    return toMeter;
  }

  
//2. making a Budget calculator.

function budgetCalculator(watch, phone, laptop){
    if(watch<=0 || phone <=0 || laptop<=0){
        console.log("sorry! check your input again.");
    }
    else{
        watchCost = watch * 50;
        phoneCost = phone * 100;
        laptopCost = laptop * 500;
        totalCost = watchCost + phoneCost + laptopCost;
    }
    return totalCost;
  }     


//3.calculating cost for hotel.

var costForNight = 0;
function hotelCost(days){
    if (days <= 10) {
        costForNight = days * 100;
    }
    else if(days <= 20){
        first10Night = 10 * 100;
        remainingNight = days - 10;
        second10Night = remainingNight * 80;
        costForNight = first10Night + second10Night;
    }
    else {
        first10Night = 10 * 100;
        second10Night = 10 * 80;
        remainingNight = days - 20;
        otherNight = remainingNight * 50;
        costForNight = first10Night + second10Night + otherNight;
    }
    return costForNight;
} 


//4.which name is longest:

function megaFriend (arr){
    var longest = arr.reduce(function(a, b) { 
        return a.length > b.length ? a : b
      }, '');
      return longest;
    }
    
