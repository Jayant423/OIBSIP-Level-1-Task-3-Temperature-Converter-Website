const calculateTemp = (event) => {
    event.preventDefault();
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    //Celsius to Kelvin
    const celToKel = (cel) => {
        let kelvin =(cel + 273.15).toFixed(1);
        return kelvin; 
    }
    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius; 
    }
    //Fahrenheit to Kelvin
    const fahToKel = (fah) => {
        let kelvin = (((fah - 32) * 5 / 9)+273).toFixed(1);
        return kelvin;
        
    }
    // Kelvin to Celsius
    const kelToCel = (kel) => {
        let celsius = (kel - 273.15).toFixed(1);
        return celsius;
        
    }
    //Kelvin to Fahrenheit
    const kelToFah = (kel) => {
        let fahrenheit = ((1.8*(kel - 273.15))+32).toFixed(1);
        return fahrenheit;
        
    }
    
 if (valueTemp === 'cel') {
   
        document.getElementById("r1").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("r2").innerHTML = celToKel(inputTemp) + " Kelvin";
        alert("hi");
       
     }
    else if(valueTemp === 'fah'){
         document.getElementById("r1").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
         document.getElementById("r2").innerHTML = fahToKel(inputTemp) + " Kelvin";
         
    }
    else
    {
        document.getElementById("r1").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("r2").innerHTML = kelToFah(inputTemp) + " Kelvin";
    }
};
