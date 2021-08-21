// memory buttons
let defaultMemory = document.getElementById('default-Memory');
let memory16gb = document.getElementById('gb16');
//storage buttons
let defaultStorage = document.getElementById('gb256');
let storage512Gb = document.getElementById('gb512');
let storageTb1 = document.getElementById('tb1');
//delivery buttons
let freeShipment = document.getElementById('free');
let expressShipment = document.getElementById('express');

// id of best price
let memoryCostId = document.getElementById('memory-cost')
// storage id
let storageCostId = document.getElementById('storage-cost');
// delivery cost
let deliveryCostId = document.getElementById('delivery-cost');
let bestPriceId = document.getElementById('best-price');
let totalPrice = document.getElementById('total-price');
 function addSingleCost(perCost,previousCost){
     let singleCost = perCost;
     let currentCostId = previousCost;
     currentCostId.innerText = singleCost;     
 };
 // adding single cost
 defaultMemory.addEventListener('click', function(){
     addSingleCost(0, memoryCostId);
     let memoryCost =memoryCostId.innerText;
     let storageCost =storageCostId.innerText;
     let deliveryCost =deliveryCostId.innerText;
     let bestPrice =  bestPriceId.innerText; 
    totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
 });
 memory16gb.addEventListener('click', function(){
    addSingleCost(180 ,memoryCostId);
    let memoryCost =memoryCostId.innerText;
    let storageCost =storageCostId.innerText;
    let deliveryCost =deliveryCostId.innerText;
    let bestPrice =  bestPriceId.innerText; 
   totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
});
// define storage cost
defaultStorage.addEventListener('click', function(){
    addSingleCost(0, storageCostId);
    let memoryCost =memoryCostId.innerText;
    let storageCost =storageCostId.innerText;
    let deliveryCost =deliveryCostId.innerText;
    let bestPrice =  bestPriceId.innerText; 
   totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
});
storage512Gb.addEventListener('click', function(){
    addSingleCost(100,storageCostId);
    let memoryCost =memoryCostId.innerText;
    let storageCost =storageCostId.innerText;
    let deliveryCost =deliveryCostId.innerText;
    let bestPrice =  bestPriceId.innerText; 
   totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
});
storageTb1.addEventListener('click', function(){
    addSingleCost(180,storageCostId);
     let memoryCost =memoryCostId.innerText;
    let storageCost =storageCostId.innerText;
    let deliveryCost =deliveryCostId.innerText;
    let bestPrice =  bestPriceId.innerText; 
   totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
});
// define delivery cost
freeShipment.addEventListener('click', function(){
    addSingleCost(0,deliveryCostId);
 let memoryCost =memoryCostId.innerText;
    let storageCost =storageCostId.innerText;
    let deliveryCost =deliveryCostId.innerText;
    let bestPrice =  bestPriceId.innerText; 
   totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
});
expressShipment.addEventListener('click', function(){
    addSingleCost(20,deliveryCostId);
    let memoryCost =memoryCostId.innerText;
    let storageCost =storageCostId.innerText;
    let deliveryCost =deliveryCostId.innerText;
    let bestPrice =  bestPriceId.innerText;

   totalSum(memoryCost, storageCost, deliveryCost, bestPrice);
});
// accumulate total cost
function totalSum (memoryCost, storageCost,  deliveryCost, bestPrice){
 let sum = parseInt(memoryCost) +parseInt(storageCost ) + parseInt(deliveryCost) + parseInt(bestPrice);
 document.getElementById("total-price").innerText = sum;
  document.getElementById("ultimateTotal").innerText = sum; 
}
// promo Code section calculation
let promoCode = document.getElementById('promo-Code'); 
document.getElementById('promo-button').addEventListener('click',function(){
if(promoCode.value === 'stevekaku'){
    let ultimateTotal = document.getElementById('ultimateTotal').innerText; 
   let discountedTotal =(parseInt( ultimateTotal) / parseInt(100) * 20);
    let newTotal = parseInt(ultimateTotal) - parseInt(discountedTotal);
  document.getElementById('ultimateTotal').innerText = newTotal;
  promoCode.value = '';   
}
else if(promoCode.value !== 'stevekaku'){
 alert('Please! Give Valid Coupon');
 promoCode.value = '';     
}
});


