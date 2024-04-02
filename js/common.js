(function() {
// FORM
    const TOKEN = "6798443827:AAF6C2qi8NADB2Tg7cmUwMrrFaCdY2TfV9E";
    const CHAT_ID = "@eraauto2";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    const success = document.getElementById("success");
    const success4 = document.getElementById("success4");
    const success3 = document.getElementById("success3");




    document.getElementById('form1').addEventListener('submit', function(e) {

        e.preventDefault();
        let checked_fuel = document.querySelector('input[name="fuel"]:checked');
        let checked_budget = document.querySelector('input[name="budget"]:checked');
        let checked_rule = document.querySelector('input[name="rule"]:checked');
        let checked_body = document.querySelector('input[name="body-auto"]:checked');


        let message = `<b>Заявка. Онлайн подбор! Главная страница!</b>\n`;
        message+=`<b>Имя: </b> ${this.name.value}\n`;
        message+=`<b>Телефон: </b> ${this.phone.value}\n`;
        message+=`<b>Тип топлива: </b> ${checked_fuel.value}\n`;
        message+=`<b>Бюджет: </b> ${checked_budget.value}\n`;
        message+=`<b>Вид авто: </b> ${checked_body.value}\n`;
        message+=`<b>Тип руля: </b> ${checked_rule.value}\n`;

        let  formData = new FormData(this);
        for (let value of formData.values()) {
            if(value.length ===0){
            ev.preventDefault() // если нет полей - то остонавливаем выполнение события
            }

        }

        axios.post(URI_API, {
            chat_id:CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.name.value = "";
            this.phone.value = "";
            success.innerHTML = "Сообщение отправлено!";
            success.style.display = "block";

        })
        .catch((err) =>{
            console.warn(err);
        })
        .finally(() => {
            console.log('Конец')
        })
    })




    document.getElementById('form2').addEventListener('submit', function(e) {

        e.preventDefault();
        let checked_fuel2 = document.querySelector('input[name="fuel2"]:checked');
        let checked_budget2 = document.querySelector('input[name="budget2"]:checked');
        let checked_rule2 = document.querySelector('input[name="rule"]:checked');
        let checked_body2= document.querySelector('input[name="body-auto2"]:checked');


        let message5 = `<b>Заявка с сайта Онлайн подбор!</b>\n`;
        message5+=`<b>Имя: </b> ${this.name4.value}\n`;
        message5+=`<b>Телефон: </b> ${this.phone4.value}\n`;
        message5+=`<b>Тип топлива: </b> ${checked_fuel2.value}\n`;
        message5+=`<b>Бюджет: </b> ${checked_budget2.value}\n`;
        message5+=`<b>Вид авто: </b> ${checked_body2.value}\n`;
        message5+=`<b>Тип руля: </b> ${checked_rule2.value}\n`;

        let  formData = new FormData(this);
        for (var value of formData.values()) {
            if(value.length ===0){
            ev.preventDefault() // если нет полей - то остонавливаем выполнение события
            }

        }

        axios.post(URI_API, {
            chat_id:CHAT_ID,
            parse_mode: 'html',
            text: message5
        })
        .then((res) => {
            this.name4.value = "";
            this.phone4.value = "";
            success3.innerHTML = "Сообщение отправлено!";
            success3.style.display = "block";

        })
        .catch((err) =>{
            console.warn(err);
        })
        .finally(() => {
            console.log('Конец')
        })
    })






});

function openForm() {
    document.getElementById("form-popup").style.display = "block";
}

  function closeForm() {
    document.getElementById("form-popup").style.display = "none";
}


