// chairWood = 3cfit/chair
// tableWood = 10cfit/table
// bedWood = 50cfit/bed


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodBedWood = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodBedWood;
    return totalWood;

}
const firstOption = woodCalculator(5, 2, 1);
console.log(firstOption);
