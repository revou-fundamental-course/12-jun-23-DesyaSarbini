// javascript

function convertSuhu() {
    var inputSuhu = document.getElementById("input");
    var hasil = document.getElementById("hasil");
  
    // Used to detect if the input is null or a string type
    if (inputSuhu.value === "" || isNaN(inputSuhu.value)) {
        alert("masukkan suhu");
        resetFields();
        return;
    } else {
      // Convert Celcius to Fahrenheit
      var celcius = parseFloat(inputSuhu.value);
      var fahrenheit = (celcius * 9) / 5 + 32;
  
      // Display the result, and the logic
      hasil.textContent = "Hasil : " + celcius + "°C = " + fahrenheit + "°F";
      rumus.textContent =
        "Rumus : " + fahrenheit + "°F : " + celcius + "°C * (9/5) + 32 ";
    }
  }
  
  function reverseSuhu() {
    // Reverse To Celcius
    location.reload();
  }
  
  //Used to change from "Celcius To Fahrenheit" to "Fahrenheit To Celcius"
  function reverseFahrenheit() {
    resetFields();
    var fahrenheitInput = document.getElementById("input");
    var label = document.querySelector('label[for="input"]');
    var convertButton = document.querySelector(
      'button[onclick="convertSuhu()"]'
    );
    var reverseButton = document.querySelector(
      'button[onclick="reverseFahrenheit()"]'
    );
  
    label.textContent = "Fahrenheit:";
    fahrenheitInput.placeholder = "masukkan suhu";
    
    convertButton.setAttribute("onclick", "convertFahrenheit()");
    reverseButton.setAttribute("onclick", "reverseSuhu()");
  }
  
  //Used To Convert Fahrenheit To Celcius
  function convertFahrenheit() {
    var fahrenheitInput = document.getElementById("input");
    var hasil = document.getElementById("hasil");
    var rumus = document.getElementById("rumus");
  
    // Check if Fahrenheit input is empty or not a number
    if (fahrenheitInput.value === "" || isNaN(fahrenheitInput.value)) {
        alert ("masukkan suhu");
        return
    }
  
    // Convert Fahrenheit to Celcius
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celcius = ((fahrenheit - 32) * 5) / 9;
  
    // Display the result
    hasil.textContent = "Hasil: " + fahrenheit + "°F = " + celcius + "°C";
    rumus.textContent =
      "How To Get " + celcius + "°C: (" + fahrenheit + "°F - 32) * 5/9";
  }
  
  // function use to clear input, result, and logic Value
  function btnReset() {
    var input = document.getElementById("input");
    var hasil = document.getElementById("hasil");
    var rumus = document.getElementById("rumus");
  
    input.value = "";
    hasil.textContent = "";
    rumus.textContent = "";
  }
