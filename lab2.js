
const cityCodes = {
    'КИЇВ': '044',
    'ЛЬВІВ': '032',
    'ОДЕСА': '048',
    'ХАРКІВ': '057',
    'ДНІПРО': '056'
  };
 
  
  function checkCity() {
    const cityName = document.getElementById('cityName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (cityName in cityCodes) {
      document.getElementById('cityResult').textContent = `${cityCodes[cityName]}  ${phoneNumber}`;
    } else {
      document.getElementById('cityResult').textContent = "Назва міста відсутня в списку.";
    }
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    var phoneNumberInput = document.getElementById('phoneNumber');
    
    if (phoneNumberInput) {
      phoneNumberInput.onchange = function() {
        if (document.getElementById('cityName').value in cityCodes) {
          checkCity();
        }
      };
    } else {
      console.log("Element with id 'phoneNumber' was not found");
    }
  });
  
 

document.addEventListener('DOMContentLoaded', function () {
  var image = document.querySelector('.picture img');

 
  function changeImageOnHover() {
      image.src = 'flower2.jpg';
  }

  
  function restoreOriginalImage() {
      image.src = 'flower1.jpg';
  }

  image.addEventListener('mouseover', changeImageOnHover);
  image.addEventListener('mouseout', restoreOriginalImage);
});

  