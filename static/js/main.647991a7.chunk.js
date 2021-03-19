(this["webpackJsonppyramid-descent"]=this["webpackJsonppyramid-descent"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(1),s=n.n(l),a=n(5),r=n.n(a),c=(n(14),n(4)),i=n(6),o=n(7),d=n(2),u=n(9),h=n(8),p=(n(15),n(16),n(17),n(18),n(0)),v=function(e){var t=e.row,n=e.col,l=e.node,s=e.handleClickBlock,a=e.bottomBorder,r=e.rightBorder;return Object(p.jsx)("div",{className:"pyramid-block ".concat(l.clicked?"clicked":""," ").concat(a?"bottom-border":null," ").concat(r?"right-border":null),onClick:function(e){return s(t,n)},children:l.value})},b=function(e){var t=e.row,n=e.rowValues,l=e.handleClickBlock,s=e.bottomBorder;return Object(p.jsx)("div",{className:"pyramid-level",children:n.map((function(e,a){return Object(p.jsx)(v,{row:t,col:a,node:e,handleClickBlock:l,bottomBorder:s,rightBorder:a===n.length-1})}))})},j=function(e){var t=e.pyramidValues,n=e.handleClickBlock;return Object(p.jsx)("div",{className:"pyramid",children:t.map((function(e,l){return Object(p.jsx)(b,{row:l,rowValues:e,handleClickBlock:n,bottomBorder:l===t.length-1})}))})},g=(n(20),function(){return Object(p.jsxs)("div",{className:"left-panel",children:[Object(p.jsx)("h1",{children:"Pyramid Descent Puzzle"}),Object(p.jsx)("p",{children:"To solve the puzzle, you must find a path that traverses the pyramid from top to bottom visiting numbers whose product is the given target value."}),Object(p.jsx)("p",{children:"Each step in the path must go down one row, and go either one step to the left or one step to the right."}),Object(p.jsx)("p",{children:"The top box begins your path. Click on a box on the next row to continue."})]})}),m=(n(21),function(e){return Object(p.jsx)("div",{className:"middle-panel",children:e.children})}),f=(n(22),function(e){var t=e.target,n=e.steps,l=e.length,s=e.solved,a=e.handleSubmit,r=e.handleNextPuzzle,c=e.wrongAnswer,i=e.handleTryAgain;return Object(p.jsxs)("div",{className:"right-panel",children:[Object(p.jsx)("div",{className:"product",children:"Product"}),Object(p.jsx)("div",{className:"target",children:t}),n.length===l-1?Object(p.jsx)("button",{onClick:a,children:"Submit"}):null,"tryAgain"===s||"yes"===s?Object(p.jsx)("button",{onClick:"yes"===s?r:"tryAgain"===s?i:null,children:"tryAgain"===s?"Try Again":"Next Puzzle!"}):null,"tryAgain"===s?Object(p.jsx)("p",{children:"Your product is ".concat(c)}):null]})}),x=(n(23),function(){return Object(p.jsxs)("div",{className:"good-job",children:[Object(p.jsx)("p",{children:"You solved all!"}),Object(p.jsx)("p",{children:"Good Job!!"})]})}),k=[{values:[[1],[2,3],[4,1,1]],target:2},{values:[[7],[4,5],[5,4,3],[1,2,2,1]],target:105},{values:[[2],[4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]],target:720},{values:[[3],[7,6],[1,8,4],[4,6,2,5],[5,7,9,2,3]],target:1296},{values:[[4],[7,4],[7,3,2],[5,9,6,8],[5,8,2,9,6]],target:3528}],y=function(e,t){for(var n=[{steps:"",product:1,depth:0,idx:0}];n.length;){var l=n.pop();if(l.product*=t[l.depth][l.idx],l.depth===t.length-1){if(l.product===e)return l.steps}else n.push({steps:l.steps+"L",product:l.product,depth:l.depth+1,idx:l.idx}),n.push({steps:l.steps+"R",product:l.product,depth:l.depth+1,idx:l.idx+1})}};console.log(y(720,[[2],[4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]]));var O=y,w=function(e,t){console.log("steps",e,"pyramidValues",t);var n=t[0][0];console.log("product",n);for(var l=0,s=0;s<e.length;s++)l="L"===e[s]?l:l+1,n*=t[s+1][l];return n},A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var l;return Object(i.a)(this,n),(l=t.call(this,e)).handleSubmit=function(){console.log("came in to check answer");var e=k[l.state.level-1].values;if(O(l.state.target,e)===l.state.steps)l.setState({solved:"yes"});else{var t=w(l.state.steps,k[l.state.level-1].values);l.setState({solved:"tryAgain",wrongAnswer:t})}},l.handleNextPuzzle=function(){l.nextLevel()},l.handleTryAgain=function(){var e=l.state.pyramidValues.map((function(e){return e.map((function(e){var t=Object(c.a)({},e);return t.clicked=!1,t}))}));e[0][0].clicked=!0,l.setState({pyramidValues:e,steps:"",solved:"no"})},l.state={steps:"",pyramidValues:[[]],target:0,level:0,solved:!1,solvedAll:!1,wrongAnswer:0},l.handleClickBlock=l.handleClickBlock.bind(Object(d.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(d.a)(l)),l.handleNextPuzzle=l.handleNextPuzzle.bind(Object(d.a)(l)),l.handleTryAgain=l.handleTryAgain.bind(Object(d.a)(l)),l}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.nextLevel()}},{key:"nextLevel",value:function(){if(this.state.level!==k.length){var e=this.state.level+1,t=k[e-1].values.map((function(e){return e.map((function(e){return{value:e,clicked:!1}}))}));t[0][0].clicked=!0;var n=k[e-1].target;this.setState({pyramidValues:t,target:n,level:e,solved:"no",steps:""})}else this.setState({solvedAll:!0})}},{key:"handleClickBlock",value:function(e,t){if(console.log(e,t),0!==e&&(e===this.state.steps.length||e===this.state.steps.length+1)){var n=this.state.pyramidValues[e-1].reduce((function(e,t,n){return t.clicked?n:e}),-1);if(console.log("prevColIdx",n),(t===n||t===n+1)&&!this.state.pyramidValues[e].reduce((function(e,n,l){return!(!n.clicked||l===t)||e}),!1)){var l=this.state.steps,s=this.state.pyramidValues.map((function(s,a){return s.map((function(s,r){var i=Object(c.a)({},s);return a===e&&r===t&&(i.clicked=!i.clicked,i.clicked?l+=t===n?"L":"R":l=l.substring(0,l.length-1)),i}))}));this.setState({pyramidValues:s,steps:l,solved:"no"})}}}},{key:"render",value:function(){return this.state.solvedAll?Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{}),Object(p.jsx)(m,{children:Object(p.jsx)(j,{pyramidValues:this.state.pyramidValues,handleClickBlock:this.handleClickBlock})}),Object(p.jsx)(f,{target:this.state.target,steps:this.state.steps,length:this.state.pyramidValues.length,solved:this.state.solved,handleSubmit:this.handleSubmit,handleNextPuzzle:this.handleNextPuzzle,handleTryAgain:this.handleTryAgain,wrongAnswer:this.state.wrongAnswer})]})}}]),n}(s.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,l=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),l(e),s(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),C()}],[[24,1,2]]]);
//# sourceMappingURL=main.647991a7.chunk.js.map