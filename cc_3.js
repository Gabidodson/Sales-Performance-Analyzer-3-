//Create a Function to Calculate Average Sales

function calculateAveragesales (salesArray){
    let total = 0;
    for (let sale of salesArray) {
        total += sale;
    }
        return total / salesArray.length;
}
        let sales = [100,150,200,250,300];
console.log (`Average sales: $$
    {calculateAveragesales(sales)}`);

    



