let numbers = [];
function addNumber() {
  let inputNumber = +document.getElementById("n").value;
  numbers.push(inputNumber);
  updateDisplay();
}
function updateDisplay() {
    let displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = " ";
    for (let i = 0; i < numbers.length; i++)
    {
      displayArea.innerHTML += numbers[i] + " ";
      displayArea.si
    }
}
  function sumPositiveNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Tổng số dương: "+sum;
}
function demso(){
    let dem=0;
    for (let i = 0; i < numbers.length; i++)
    {
        dem++;
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Số dương: "+dem;
}
function min(){
    let min= numbers[0];
    for (let i = 1; i < numbers.length; i++)
    {
        if (min>numbers[i])
        {
            min=numbers[i];
        }
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Số nhỏ nhất: "+min;
}   
function minduong(){
    let min=numbers[0];
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i]>0)
        {   
            if (min>numbers[i])
            {
                min=numbers[i];
            }
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result").innerHTML ="Số dương nhỏ nhất: "+min;
        }
        else
        {
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result").innerHTML ="Không có số dương trong mảng";
        }
    }
}
function sochanend(){
    let sochan=0;
    for (let i=0; i < numbers.length; i++)
    {
        if (numbers[i]%2===0)
        {
            sochan=numbers[i];
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result").innerHTML ="Số chẵn cuối cùng: "+sochan;
        }
    }   
}
function doicho() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    
    // Kiểm tra xem vị trí có hợp lệ hay không
    if (a < 0 || a >= numbers.length || b < 0 || b >= numbers.length) {
      console.log("Vị trí không hợp lệ!");
      return;
    }
    
    // Thực hiện đổi chỗ 2 giá trị trong mảng
    let temp = numbers[a];
    numbers[a] = numbers[b];
    numbers[b] = temp;
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Mảng sau khi đổi chỗ: "+ numbers;
  }
function sapxep(){
    numbers.sort(function(a, b){return a - b});
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Mảng sau khi sắp xếp: "+numbers;   
}
function isPrime(numbers) {
    if (numbers < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
      if (numbers % i === 0) {
        return false;
      }
    }
    return true;
  }
function songuyento() {
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML =numbers[i];  
        return;
      }
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="-1";  
  }
function demsonguyen() {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (Number.isInteger(numbers[i])) {
        count++;
      }
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Số nguyên: "+ count; 
  }
function sosanh() {
    let soduong = 0;
    let soam = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        soduong++;
      } 
      else if (numbers[i] < 0) {
       soam++;
      }
    }
    if (soduong > soam) {
        document.getElementById("result-wrapper").style.display = "block";
        document.getElementById("result").innerHTML ="Số dương > Số âm "; 
    } else if (soduong < soam) {
        document.getElementById("result-wrapper").style.display = "block";
        document.getElementById("result").innerHTML ="Số âm > Số dương"; 
    } else {
        document.getElementById("result-wrapper").style.display = "block";
        document.getElementById("result").innerHTML ="Số dương = Số âm "; 
    }
  }