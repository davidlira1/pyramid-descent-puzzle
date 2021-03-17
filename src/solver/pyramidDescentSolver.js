/**
 * 
 * @param {number} target The product that we want to achieve by traversing thru the pyramid
 * @param {array} pyramid A multi-dimensional array that will be traversed
 * @return {string} A string composed of R and/or L characters
 */

var pyramidDescentSolver = (target, pyramid) => {

    var stack = [{steps: '', product: 1, depth: 0, idx: 0}];

    while(stack.length) {
        var n = stack.pop();

        n.product*= pyramid[n.depth][n.idx];
        if(n.depth === pyramid.length - 1) {
            if(n.product === target) return n.steps;
        } else {
            stack.push({steps: n.steps + 'L', product: n.product, depth: n.depth + 1, idx: n.idx});
            stack.push({steps: n.steps + 'R', product: n.product, depth: n.depth + 1, idx: n.idx + 1});
        }
    }

    
    // var recurse = (steps, product, depth, idx) => {
    //     console.log(steps, product, depth, idx);
    //     product*= pyramid[depth][idx];

    //     if(depth === pyramid.length - 1) {
    //         if(product === target) console.log('FOUND IT');
    //         return product === target ? steps : false;
    //     }

    //     var result;
    //     result = recurse(steps + "L", product, depth + 1, idx);
    //     if(result) return result;
    //     result = recurse(steps + "R", product, depth + 1, idx + 1);
    //     if(result) return result;
    //     return false;
    // }

    // var steps = recurse('', 1, 0, 0);

    // return steps;
}

console.log(pyramidDescentSolver(720, [[2],[4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]]));

export default pyramidDescentSolver;