//Create a Function to Calculate Average Sales

function calculateAverageSales (salesArray){
    if(salesArray.length===0) return 0;
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
function findTopAndBottomPerformers (salespeople) {
    if (salespeople.length===0) return {topPerformer: null, bottomPerformer:null};
let topPerformer = salespeople [0];
let bottomPerformer = salespeople[0];
for(let person of salespeople){
    if (person.averageSales > topPerformer.averageSales){
        topPerformer=person;
 }
if(person.averageSales < bottomPerformer.averageSales){
bottomPerformer=person;
    }
}
return {topPerformer,bottomPerformer};




//Combine Functions to Create a Performance Repo
function generatePerformanceReport (salesData){
    const salespeople = salesData.map(person=> {
    const averageSales = calculateAverageSales (person.sales);
    return {
    name: person.name,
    averageSales: averageSales,
    performanceRating: determinePerformanceRating(averageSales)
};
    });
const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salespeople);

let report= "Performance Report:\n\n";
for (let person of salespeople){
    report += `${person.name}:\n`;
    report += ` Average Sales: $${person.averageSales.toFixed(2)}\n`;
    report += `Performance Rating: ${person.performancerating}\n\n`;
};
report += "Top Performer:"+ (topPerformer ? `${topPerformer.name}(Average Sales: $${topPerformer.averageSales.toFixed(2)})`:"None")+ "\n";
report += "Bottom Performer:"+ (bottomPerformer ? `${bottomPerformer.name}(Average Sales: $${bottomPerformer.averageSales.toFixed(2)})`:"None")+ "\n";
return report;
}




//Testing Functions with Sample Data
const salesData = [
    {name:'Alice', sales: [12000,15000,13000]},
    {name:'Bob', sales: [7000,6000,7500]},
    {name:'Charlie', sales: [3000,4000,3500]},
    {name:'Diana', sales: [9000,8500,9200]}];

    console.log(generatePerformanceReport(salesData));
    