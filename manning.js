


function mannings (n, s, w, d, x){
    let velocity=(x/n)*((w*d)/(2*d+w))**(2/3)*(s**(1/2));
    return velocity;
}
function test () {
    let manning = document.getElementById("n").value;
    let slope = document.getElementById("s").value;
    let width = document.getElementById("w").value;
    let depth = document.getElementById("d").value;
    let unit = document.getElementsByName('units');
    let aunit;
    for (let i = 0; i < unit.length; i++) {
        if (unit[i].checked) {
            aunit = unit[i].value;
        }
    }

    if (aunit == 'English') {

        if ((manning>0 && slope>0) && (depth>0 && width>0) ) {
            let res = mannings(manning, slope, width, depth, 1.49);
            document.getElementById("result").innerHTML = `the velocity is ${res} (ft/s)`;
        }
        else{
        document.getElementById("result").innerHTML = `Warning: Check the input numbers (remind the values have to be greater than zero)`;
    }
    }

    if (aunit == 'SI') {

        if ((manning>0 && slope>0) && (depth>0 && width>0) ) {

            let res = mannings(manning, slope, width, depth, 1);
            document.getElementById("result").innerHTML = `the velocity is ${res} (m/s)`;
        }
         else{

             document.getElementById("result").innerHTML = `Warning: Check the input numbers (remind the values have to be greater than zero)`;
         }
    }

    if (aunit==undefined){document.getElementById("result").innerHTML = `You need to choose the unit system`;}
}

document.getElementById("btn").addEventListener("click",test);




