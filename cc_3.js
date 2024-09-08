//Create a Function to Calculate Average Sales

function calculateAverageSales (salesArray){
    let total = 0;
    for (let sale of salesArray) {
        total += sale;
    }
        return total / salesArray.length;
}
        let sales = [1000,1500,4000,6000,6500];
console.log (`Average sales: $$
    {calculateAverageSales(sales)}`);



//Create a function for Performance Ratings
function determinePerformanceRating (averageSales) {
    if (averageSales>10000) {
 return "Excellent";
} else if (averageSales>=7000 && averageSales<=10000) {
    return "Good";
} else if (averageSales>= 4000 && averageSales < 7000){
return "Satisfactory";
} else{
return "Needs Improvement";
}

//example console.log(determinePerformanceRating(1500))



//Function to identify Top and Bottom Performers
function findTopAndBottomPerformers (salespeople){
    if (salespeople.length===0){
        return {topPerformer: null, bottomPerformer:null};
}
const result = salespeople.reduce ((acc,current) => {
    if(!acc.topPerformer|| current.totalSales > acc.topPerformer.totalSales){
        acc.topPerformer = current;
}
if (!acc.bottomPerformer || current.totalSales < acc.bottomPerformer.totalSales){
    acc.bottomPerformer = current;
}
return acc;
},{topPerformer:null, bottomPerformer:null});

return result; 
}

