// function insertNum(number){
//     var existingNumbers =  $('#result').val()
//     $('#result').val(existingNumbers + number)
// }
// // for result clear when click the "c"
// function clearResult(){
//     $('#result').val('')  
// }


// //-------------
// function calculate(){
//    var result =  eval($('#result').val())
//    $('#result').val(result)
// }

// function deleteNum(){
//     var numberPresent =  $('#result').val();
//     if(numberPresent != " "){
//         $('#result').val($('#result').val().slice(0,-1))  
//     }
// }










function insertNum(number){
    var existingNumbers = document.getElementById('result').value;
  document.getElementById('result').value = existingNumbers + number
}

//---------------
function clearResult(){
    document.getElementById('result').value = '';
}

function calculate(){
  var result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;

}


function deleteNum(){
    var presentNum = document.getElementById('result').value;
    if(presentNum != ""){
        document.getElementById('result').value = document.getElementById('result').value.slice(0,-1) 
    }
}



function percentage() {
  var total =  document.getElementById('result').value;

    //  document.getElementById('result').value = total /100;
  total = total / 100

   var parcentageResult =  total.toFixed(2);
   if(parcentageResult === 'NaN'){
    document.getElementById('result').value = "Syntax ERROR";  
   }else{document.getElementById('result').value = parcentageResult;}

}