
//note does not account for potential partial filling of 40 ft containers
function containerOptimization(packagesPerPallet,orderSize,palletsPer20C,palletsPer40C,c20Price,c40Price, airPricePerKg, packageWeightKg){
    //calculate the number of pallets required to hold the order size
    
    let orderRemainder = orderSize % packagesPerPallet
    let roundedPackages = orderRemainder/packagesPerPallet >= .5 ? packagesPerPallet - orderRemainder :0-orderRemainder
    let actualOrderSize = orderSize + roundedPackages
    let pallets = actualOrderSize/packagesPerPallet

    console.log(roundedPackages)
    console.log(actualOrderSize)
    console.log((orderSize - orderRemainder)/packagesPerPallet)
    console.log(pallets)
    console.log(orderRemainder)

    let optimized = false
    let remainingPallets = pallets

    let fortyFtContainers = 0
    let twentyFtContainers = 0

    
    let airFreight
    let palletsInPartiallyFilledContainer
    let palletsRequiredToFillRemainingContainer


    while(!optimized){
        if(remainingPallets >= palletsPer40C){
            fortyFtContainers += 1
            remainingPallets -= palletsPer40C
        }else if(remainingPallets >= palletsPer20C){
            twentyFtContainers += 1
            remainingPallets -= palletsPer20C
        }else{
            //get air fresign price
            airFreight = airPricePerKg * (remainingPallets*packagesPerPallet*packageWeightKg)
            //get pallets in partially filled container
            palletsInPartiallyFilledContainer = remainingPallets
            //
            palletsRequiredToFillRemainingContainer = palletsPer20C - remainingPallets 
            optimized = true
        }
    }
    //calculate cost of containers
    let cost20ft = twentyFtContainers * c20Price
    let cost40ft = fortyFtContainers * c40Price

    console.log(`20ft: ${twentyFtContainers}`)
    console.log(`40ft: ${fortyFtContainers}`)
    console.log(`total container cost ${cost20ft + cost40ft}`)

    //calculate cost of air freighting the pallets
    let totalCostWithAirFreight = airFreight + cost20ft + cost40ft
    let unitCostWithAirFreight = totalCostWithAirFreight/actualOrderSize
    let totalInventoryCostWithAirFreight = actualOrderSize * getUnitPrice(actualOrderSize)
    console.log('____________________')
    console.log("With Air freight")
    console.log('____________________')
    console.log('air freight cost: ' + airFreight)
    console.log(`total shipping cost: ${totalCostWithAirFreight}`)
    console.log(`unit shipping cost: ${unitCostWithAirFreight}`)
    console.log(`total inventory cost: ${totalInventoryCostWithAirFreight}`)
    console.log(`total cost: ${totalCostWithAirFreight + totalInventoryCostWithAirFreight}`)
    
    //calculate the cost of partially filling a 20ft container
    let totalCostWithPartialFill = cost20ft + cost40ft +c20Price
    let totalUnitsWithPartialFill = actualOrderSize
    let unitCostWithPartialFill = totalCostWithPartialFill/totalUnitsWithPartialFill
    let totalInventoryCostWithPartialFill = totalUnitsWithPartialFill * getUnitPrice(totalUnitsWithPartialFill)
    console.log('____________________')
    console.log("With Partial Fill")
    console.log('____________________')
    console.log('Partially filled container cost: ' + c20Price)
    console.log(`total shipping cost: ${totalCostWithPartialFill}`)
    console.log(`unit shipping cost: ${unitCostWithPartialFill}`)
    console.log(`total inventory cost: ${totalInventoryCostWithPartialFill}`)
    console.log(`total cost: ${totalCostWithPartialFill + totalInventoryCostWithPartialFill}`)
    
    
    //calculate the cost of rounding up to fill a 20ft container
    let totalCostWithRoundingUp = cost20ft + cost40ft +c20Price
    let totalUnitsWithRoundingUp = actualOrderSize + (palletsRequiredToFillRemainingContainer * packagesPerPallet)
    let unitCostWithRoundingUp = totalCostWithRoundingUp/totalUnitsWithRoundingUp
    let totalInventoryCostWithRoundingUp = totalUnitsWithRoundingUp * getUnitPrice(totalUnitsWithRoundingUp)
    console.log('____________________')
    console.log("With Rounding up to Full container")
    console.log('____________________')
    console.log('extra full container cost: ' + c20Price)
    console.log(`total shipping cost: ${totalCostWithRoundingUp}`)
    console.log(`unit shipping cost: ${unitCostWithRoundingUp}`)
    console.log(`total inventory cost: ${totalInventoryCostWithRoundingUp}`)
    console.log(`total cost: ${totalCostWithRoundingUp + totalInventoryCostWithRoundingUp}`)

    //calculate the cost of rounding down

    let totalCostWithRoundingDown = cost20ft + cost40ft 
    let totalUnitsWithRoundingDown = actualOrderSize - (palletsInPartiallyFilledContainer * packagesPerPallet)
    let unitCostWithRoundingDown = totalCostWithRoundingDown/totalUnitsWithRoundingDown
    let totalInventoryCostWithRoundingDown = totalUnitsWithRoundingDown * getUnitPrice(totalUnitsWithRoundingDown)
    console.log('____________________')
    console.log("With Rounding down 0 extra containers")
    console.log('____________________')
    console.log('extra full container cost: ' + 0)
    console.log(`total shipping cost: ${totalCostWithRoundingDown}`)
    console.log(`unit shipping cost: ${unitCostWithRoundingDown}`)
    console.log(`total inventory cost: ${totalInventoryCostWithRoundingDown}`)
    console.log(`total cost: ${totalCostWithRoundingDown + totalInventoryCostWithRoundingDown}`)


}
const packagesPerPallet = 2310
const orderSize = 25000
const packageWeightKg = 0.068
const c20Price = 14000
const c40Price = 16600
const airPricePerKg = 19
const palletsPer40C = 24
const palletsPer20C = 11


containerOptimization(packagesPerPallet,orderSize,palletsPer20C,palletsPer40C,c20Price,c40Price, airPricePerKg, packageWeightKg)







function getUnitPrice(orderSize) {
    if(orderSize > 0 && orderSize < 20001){
      return 3.5
    }else if(orderSize > 20000 && orderSize < 50001){
      return 3.4
    }else if(orderSize > 50000 && orderSize <100001){
      return 3.2
    }else if(orderSize > 100000){
      return 3
    }else{
      return "error"
    }
  }