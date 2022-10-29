// $(".home_content button").on("click", function(){
//     let chapter = $("#chapter").val();
//     let sloka = $("#sloka").val();
//     const url = "https://bhagavadgitaapi.in/slok/"+chapter+"/"+sloka+"/";
//     let response = fetch(url);
//     let data = response.json();
//     $(".output p").html(data);
// });

// let chapter = $("#chapter").val();
// let sloka = $("#sloka").val();
// var url = "https://bhagavadgitaapi.in/slok/"+chapter+"/"+sloka+"/";
// $(".home_content button").on("click", get_api(url));

//Using JavaScript fetch()
function getData(){ 
    chapter = $("#chapter").val();
    verse = $("#sloka").val();
    fetch( `https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`)
        .then(response => {
            return response.text()
        })
        .then((data) => {
            console.log(JSON.parse(data));
            let output = JSON.parse(data);
            $(".output p.san").html(output['slok']).addClass("output_style");
            $(".output p.eng").html(output['siva']['et']).addClass("output_style");
       })
        .catch((error) => {
            console.log(error)
        })
}

//2nd
// async function get_api(url){
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//     }

