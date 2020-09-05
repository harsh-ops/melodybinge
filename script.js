let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
 
 
let users = ['Prof. Saurabh ','Prof. Bandana ', 'Prof. Preetish', 'Prof. Prassanna',
 'Prof. Pallavi', 'Prof. Shilpi','Honble Vc Sir', 'Honble Pro Vc Sir', 
 'Prof. Sushil Kumar','Prof. Rashmi Shekhar','Prof. Dheeraj','Prof. Indrajit',
 'Prof. Anshuman','Prof. Abhinav Sahey','Prof.Nikhil','Prof. Ruchi Mishra',
 'Prof. Avishek','Prof. Ajit','Prof. Srikant','Prof. Sweta', 'Anshu ma am'];
 
 function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btnRandom.addEventListener('click', () => {
  let index = getRandomNumber(0, users.length-1);
  result.innerText = users[index];
});



function togglePopup1(){
    document.getElementById("popup-1").classList.toggle("active");
    document.getElementById("1").style.color="red";
  }

  function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
    document.getElementById("2").style.color="red";
  }

  function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
    document.getElementById("3").style.color="red";
  }

  function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active");
    document.getElementById("4").style.color="red";
  }

  function togglePopup5(){
    document.getElementById("popup-5").classList.toggle("active");
    document.getElementById("5").style.color="red";

  }

  function togglePopup6(){
    document.getElementById("popup-6").classList.toggle("active");
    document.getElementById("6").style.color="red";
  }

  function togglePopup7(){
    document.getElementById("popup-7").classList.toggle("active");
    document.getElementById("7").style.color="red";
  }
  function togglePopup8(){
    document.getElementById("popup-8").classList.toggle("active");
    document.getElementById("8").style.color="red";
  }

  function togglePopup9(){
    document.getElementById("popup-9").classList.toggle("active");
    document.getElementById("9").style.color="red";
  }

  function togglePopup10(){
    document.getElementById("popup-10").classList.toggle("active");
    document.getElementById("10").style.color="red";
  }
  function togglePopup11(){
    document.getElementById("popup-11").classList.toggle("active");
    document.getElementById("11").style.color="red";
  }
  function togglePopup12(){
    document.getElementById("popup-12").classList.toggle("active");
    document.getElementById("12").style.color="red";
  }
  function togglePopup13(){
    document.getElementById("popup-13").classList.toggle("active");
    document.getElementById("13").style.color="red";
  }
  function togglePopup14(){
    document.getElementById("popup-14").classList.toggle("active");
    document.getElementById("14").style.color="red";
  }
  function togglePopup15(){
    document.getElementById("popup-15").classList.toggle("active");
    document.getElementById("15").style.color="red";
  }
  function togglePopup16(){
    document.getElementById("popup-16").classList.toggle("active");
    document.getElementById("16").style.color="red";
  }
  function togglePopup17(){
    document.getElementById("popup-17").classList.toggle("active");
    document.getElementById("17").style.color="red";
  }
  function togglePopup18(){
    document.getElementById("popup-18").classList.toggle("active");
    document.getElementById("18").style.color="red";
  }
  function togglePopup19(){
    document.getElementById("popup-19").classList.toggle("active");
    document.getElementById("19").style.color="red";
  }
  function togglePopup20(){
    document.getElementById("popup-20").classList.toggle("active");
    document.getElementById("20").style.color="red";
  }




 
