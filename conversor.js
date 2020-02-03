//CONSTANTS//
const KILO_TO_KILO= 1;
const KILO_TO_METER= 1000;
const KILO_TO_MILES= 0.621371;
const KILO_TO_YARD= 1093.61;
const KILO_TO_FEET= 3280.84;
const KILO_TO_INCHES= 39370.1;

const METER_TO_METER= 1;
const METER_TO_MILES= 0.000621371;
const METER_TO_YARD= 1.09361;
const METER_TO_FEET= 3.28084;
const METER_TO_INCHES= 39.3701;

const MILES_TO_MILES= 1;
const MILES_TO_KILO= 1.60934;
const MILES_TO_METER= 1609.34;
const MILES_TO_YARD= 1760;
const MILES_TO_FEET= 5280;
const MILES_TO_INCHES= 63360;

const YARD_TO_YARD= 1;
const YARD_TO_KILO= 0.0009144;
const YARD_TO_METER= 0.9144;
const YARD_TO_MILES= 0.000568182;
const YARD_TO_FEET= 3;
const YARD_TO_INCHES= 36;

const FEET_TO_FEET= 1;
const FEET_TO_KILO= 0.0003048;
const FEET_TO_METER= 0.3048;
const FEET_TO_MILES= 0.000189394;
const FEET_TO_YARD= 0.333333;
const FEET_TO_INCHES= 12;

const INCHES_TO_INCHES= 1;
const INCHES_TO_KILO= 0.0000254;
const INCHES_TO_METER= 0.0254;
const INCHES_TO_MILES= 0.0000157;
const INCHES_TO_YARD= 0.0277778;
const INCHES_TO_FEET= 0.0833333;


const entry= "The conversion value is "

//ADD FUNCTIONALITY TO INPUT BOX//


function test (){
    let distancia= document.getElementById("distance").value;
    let distanciaFloat=Number(distancia);
    let unit1;
    unit1 = document.getElementById("units1");
    let unit1_value = unit1.options[unit1.selectedIndex].value;
    let unit2;
    unit2 = document.getElementById("units2");
    let unit2_value = unit2.options[unit2.selectedIndex].value;

     if(unit1_value ==="Kilometers" && unit2_value==="Kilometers"){
        let response=distanciaFloat*KILO_TO_KILO;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
    }
    if(unit1_value ==="Kilometers" && unit2_value==="Meters"){
        let response=distanciaFloat*KILO_TO_METER;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
    }
    if(unit1_value ==="Kilometers" && unit2_value==="Miles"){
        let response=distanciaFloat*KILO_TO_MILES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
    }
     if(unit1_value ==="Kilometers" && unit2_value==="Yard"){
        let response=distanciaFloat*KILO_TO_YARD;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Kilometers" && unit2_value==="Feet"){
        let response=distanciaFloat*KILO_TO_FEET;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Kilometers" && unit2_value==="Inches"){
        let response=distanciaFloat*KILO_TO_INCHES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Meters" && unit2_value==="Meters"){
        let response=distanciaFloat*METER_TO_METER;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Meters" && unit2_value==="Kilometers"){
        let response=distanciaFloat*METER_TO_KILO;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
   }
     if(unit1_value ==="Meters" && unit2_value==="Miles"){
        let response=distanciaFloat*METER_TO_MILES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
   }
     if(unit1_value ==="Meters" && unit2_value==="Yard"){
        let response=distanciaFloat*METER_TO_YARD;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Meters" && unit2_value==="Feet"){
        let response=distanciaFloat*METER_TO_FEET;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Meters" && unit2_value==="Inches"){
        let response=distanciaFloat*METER_TO_INCHES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
         }
     if(unit1_value ==="Miles" && unit2_value==="Miles"){
        let response=distanciaFloat*MILES_TO_MILES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Miles" && unit2_value==="Kilometers"){
        let response=distanciaFloat*MILES_TO_KILO;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Miles" && unit2_value==="Meters"){
        let response=distanciaFloat*MILES_TO_METER;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Miles" && unit2_value==="Yard"){
        let response=distanciaFloat*MILES_TO_YARD;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Miles" && unit2_value==="Feet"){
        let response=distanciaFloat*MILES_TO_FEET;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Miles" && unit2_value==="Inches"){
        let response=distanciaFloat*MILES_TO_INCHES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
             }
     if(unit1_value ==="Yard" && unit2_value==="Yard"){
        let response=distanciaFloat*YARD_TO_YARD;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Yard" && unit2_value==="Kilometers"){
        let response=distanciaFloat*YARD_TO_KILO;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Yard" && unit2_value==="Meters"){
        let response=distanciaFloat*YARD_TO_METER;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Yard" && unit2_value==="Miles"){
        let response=distanciaFloat*YARD_TO_MILES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Yard" && unit2_value==="Feet"){
        let response=distanciaFloat*YARD_TO_FEET;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Yard" && unit2_value==="Inches"){
        let response=distanciaFloat*YARD_TO_INCHES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
      }
     if(unit1_value ==="Feet" && unit2_value==="Kilometers"){
        let response=distanciaFloat*FEET_TO_KILO;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
         }
     if(unit1_value ==="Feet" && unit2_value==="Feet"){
        let response=distanciaFloat*FEET_TO_FEET;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
      }
     if(unit1_value ==="Feet" && unit2_value==="Meters"){
        let response=distanciaFloat*FEET_TO_METER;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
       }
     if(unit1_value ==="Feet" && unit2_value==="Miles"){
        let response=distanciaFloat*FEET_TO_MILES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Feet" && unit2_value==="Yard"){
        let response=distanciaFloat*FEET_TO_YARD;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Feet" && unit2_value==="Inches"){
        let response=distanciaFloat*FEET_TO_INCHES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Inches" && unit2_value==="Kilometers"){
        let response=distanciaFloat*INCHES_TO_KILO;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
         }
     if(unit1_value ==="Inches" && unit2_value==="Inches"){
        let response=distanciaFloat*INCHES_TO_INCHES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
      }
     if(unit1_value ==="Inches" && unit2_value==="Meters"){
        let response=distanciaFloat*INCHES_TO_METER;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
       }
     if(unit1_value ==="Inches" && unit2_value==="Miles"){
        let response=distanciaFloat*INCHES_TO_MILES;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Inches" && unit2_value==="Yard"){
        let response=distanciaFloat*INCHES_TO_YARD;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;
     }
     if(unit1_value ==="Inches" && unit2_value==="Feet"){
        let response=distanciaFloat*INCHES_TO_FEET;
        let response_string= response.toString();
        document.getElementById("result").innerHTML = entry + response_string;

}
}
document.getElementById("convertMe").addEventListener("click", test);
