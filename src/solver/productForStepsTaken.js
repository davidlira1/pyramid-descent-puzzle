var productForStepsTaken = (steps, pyramidValues) => {
    console.log('steps', steps, 'pyramidValues', pyramidValues);
    var product = pyramidValues[0][0];
    console.log('product', product);
    var col = 0;
    for(var i = 0; i < steps.length; i++) {
        col = steps[i] === "L" ? col : col + 1;
        product*= pyramidValues[i + 1][col];
    }
   
    return product;
}

export default productForStepsTaken;