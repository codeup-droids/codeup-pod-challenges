M.AutoInit();

$("#set_1").on("click", function () {
	// load solutions that have been workied on as forms
	// where the input is the number and the output is
	// the result of the calculations. Also load the
	// problem criteria as listed in the PE chellenge
	// itself.
})

var instance = M.Tabs.init("#");

// Or with jQuery

// $(document).ready(function(){
// 	$('.tabs').tabs();
// });

//console.log($.ajax("data/prob_obj.json"));

//$("#set_1").append(`<h2> `);

/*
*challenge: "The sum..."
challenge_title: "Sum square difference"
page_link: "https://projecteuler.net/problem=6"
probNum: "problem 6"
__proto__: Object
* */

fetch("data/prob_obj.json")
	.then( data => {
	return data.json()})
	.then( data => {
		const peObj = data[0];
		for (let i = 1; i< 7; i++) {
			let peObjData = peObj[`pe_${i}`]
			let chng = peObjData.challenge;
			let chngTit = peObjData.challenge_title;
			let probNum = peObjData.probNum;
			let lnk = peObjData.page_link;
			// dynamically create div for each problem and create a form for user input along
			// with a buton to run fucntion

			console.log(chng);
			console.log(chngTit);
			console.log(probNum);
			console.log(lnk);


		}
	});


