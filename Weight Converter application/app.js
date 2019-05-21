let form = document.getElementById("input_weight");
let input = document.getElementById("input");
let output = document.getElementById("output");
let select_input = document.getElementById("input_select");
let select_output = document.getElementById("output_select");
let newArr = [select_input, select_output];


document.addEventListener('DOMContentLoaded', function(){
    form.addEventListener('submit', kg_to_gm);
});

newArr.forEach(function(elem){
    elem.addEventListener('change', function(){
        if(newArr[0].value === newArr[1].value){
           newArr[1].value = '';
        }
        else if(newArr[0].value === 'Kg' && newArr[1].value === 'Tonne'){
            form.addEventListener('submit', kg_to_tonne);
        }
        else if(newArr[0].value === 'Kg' && newArr[1].value === 'Gram'){
            form.addEventListener('submit', kg_to_gm);
        }
        else if(newArr[0].value === 'Kg' && newArr[1].value === 'Pound'){
            form.addEventListener('submit', kg_to_pound);
        }
        else if(newArr[0].value === 'Kg' && newArr[1].value === 'Ounce'){
            form.addEventListener('submit', kg_to_ounce);
        }
        else if(newArr[0].value === 'Tonne' && newArr[1].value === 'Kg'){
            form.addEventListener('submit', tonne_to_kg);
        }
        else if(newArr[0].value === 'Tonne' && newArr[1].value === 'Gram'){
            form.addEventListener('submit', tonne_to_gm);
        }
        else if(newArr[0].value === 'Tonne' && newArr[1].value === 'Pound'){
            form.addEventListener('submit', tonne_to_pound);
        }
        else if(newArr[0].value === 'Tonne' && newArr[1].value === 'Ounce'){
            form.addEventListener('submit', tonne_to_ounce);
        }
        else if(newArr[0].value === 'Gram' && newArr[1].value === 'Kg'){
            form.addEventListener('submit', gm_to_kg);
        }
        else if(newArr[0].value === 'Gram' && newArr[1].value === 'Tonne'){
            form.addEventListener('submit', gm_to_tonne);
        }
        else if(newArr[0].value === 'Gram' && newArr[1].value === 'Pound'){
            form.addEventListener('submit', gm_to_pound);
        }
        else if(newArr[0].value === 'Gram' && newArr[1].value === 'Ounce'){
            form.addEventListener('submit', gm_to_ounce);
        }
        else if(newArr[0].value === 'Pound' && newArr[1].value === 'Kg'){
            form.addEventListener('submit', pound_to_kg);
        }
        else if(newArr[0].value === 'Pound' && newArr[1].value === 'Tonne'){
            form.addEventListener('submit', pound_to_tonne);
        }
        else if(newArr[0].value === 'Pound' && newArr[1].value === 'Gram'){
            form.addEventListener('submit', pound_to_gm);
        }
        else if(newArr[0].value === 'Pound' && newArr[1].value === 'Ounce'){
            form.addEventListener('submit', pound_to_ounce);
        }
        else if(newArr[0].value === 'Ounce' && newArr[1].value === 'Kg'){
            form.addEventListener('submit', ounce_to_kg);
        }
        else if(newArr[0].value === 'Ounce' && newArr[1].value === 'Tonne'){
            form.addEventListener('submit', ounce_to_tonne);
        }
        else if(newArr[0].value === 'Ounce' && newArr[1].value === 'Gram'){
            form.addEventListener('submit', ounce_to_gram);
        }
        else if(newArr[0].value === 'Ounce' && newArr[1].value === 'Pound'){
            form.addEventListener('submit', ounce_to_pound);
        }
    })
})
 

input.addEventListener('keydown', function(e){
    if(e.which === 8){
        output.value = '';
    }
})


function kg_to_gm(event){
    event.preventDefault();
    output.value = input.value * 1000;
}

function gm_to_kg(event){
    event.preventDefault();
    output.value = input.value/1000;
}

function kg_to_tonne(event){
    event.preventDefault();
    output.value = input.value/1000;
}

function tonne_to_kg(event){
    event.preventDefault();
    output.value = input.value*1000;
}

function kg_to_pound(event){
    event.preventDefault();
    output.value = input.value*2.205;
}

function pound_to_kg(event){
    event.preventDefault();
    output.value = input.value/2.205;
}

function kg_to_ounce(event){
    event.preventDefault();
    output.value = input.value*35.274;
}

function ounce_to_kg(event){
    event.preventDefault();
    output.value = input.value/35.274;
}

function tonne_to_gm(value){
    event.preventDefault();
    output.value = input.value*1e+6;
}

function gm_to_tonne(value){
    event.preventDefault();
    output.value = input.value/1e+6;
}

function tonne_to_pound(value){
    event.preventDefault();
    output.value = input.value*2204.623;
}

function pound_to_tonne(value){
    event.preventDefault();
    output.value = input.value/2204.623;
}

function tonne_to_ounce(value){
    event.preventDefault();
    output.value = input.value* 35274;
}

function ounce_to_tonne(value){
    event.preventDefault();
    output.value = input.value/35274;
}

function gm_to_pound(value){
    event.preventDefault();
    output.value = input.value/453.592;
}

function pound_to_gm(value){
    event.preventDefault();
    output.value = input.value*453.592;
}

function gm_to_ounce(value){
    event.preventDefault();
    output.value = input.value/28.35;
}

function ounce_to_gm(value){
    event.preventDefault();
    output.value = input.value*28.35;
}

function pound_to_ounce(value){
    event.preventDefault();
    output.value = input.value*16;
}

function ounce_to_pound(value){
    event.preventDefault();
    output.value = input.value/16;
}