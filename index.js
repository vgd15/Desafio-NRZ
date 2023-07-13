function formulario() {
    if (document.getElementById("name").value !== "" && document.getElementById("email").value !== "") {
        alert("Enviado com sucesso!");
        closePopup(); 
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');
const checkbox = document.getElementById('checkbox');
const leadForm = document.getElementById('leadForm');

function closePopup() {
    popup.classList.remove('show');
}

if (!localStorage.getItem('popupShown')) {
    popup.classList.add('show');
}

popup.addEventListener('click', function (e) {
    if (e.target === this) {
        closePopup();
    }
});

closeBtn.addEventListener('click', closePopup);

leadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log('Nome:', name);
    console.log('E-mail:', email);

    if (checkbox.checked) {
        localStorage.setItem('popupShown', true);
    }
});
