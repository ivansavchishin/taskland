
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
  
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
  
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });
  
    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        currentHeader = this.closest('.select__header');
        currentHeader.style.border = "1px solid rgb(196, 196, 196)";
        currentIcon = currentHeader.querySelector('.select__icon');
        currentIcon.style.display="none";
    }
  
    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
        currentHeader = select.querySelector('.select__header');
        currentText.innerText = text;
        currentIcon=currentHeader.querySelector('.select__icon');
        currentIcon.style.display="flex";            
        currentHeader.style.border = "1px solid rgb(223, 78, 60)";
        select.classList.remove('is-active');
    }
  
  };
  
  
  select();
  
  let sort = function () {
    let sortHeader = document.querySelectorAll('.sort__header');
    let sortItem = document.querySelectorAll('.sort__item');
  
    sortHeader.forEach(item => {
        item.addEventListener('click', sortToggle)
    });
  
    sortItem.forEach(item => {
        item.addEventListener('click', sortChoose)
    });
  
    function sortToggle() {
        this.parentElement.classList.toggle('is-active');
    
    }
  
    function sortChoose() {
        let text = this.innerText,
        sort = this.closest('.sort'),
        currentText = sort.querySelector('.sort__current');
        currentText.innerText = text;
        sort.classList.remove('is-active');

        currentIcon = sort.querySelector('.sort__icon');
         currentIcon.classList.remove('desc');
         currentIcon.classList.remove('asc');
        var sortOrder = this.getAttribute('data-order');
        if (sortOrder === 'asc') {
           
            currentIcon.classList.toggle('asc');
        } else {
            currentIcon.classList.toggle('desc'); 
       
            
        }
    }
  
  };
  
  
  sort();

  document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
    }
});
