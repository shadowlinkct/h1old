// Funzione per validare il formato dell'email
function validateEmailFormat(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funzione per controllare se l'email è in uso
function checkEmailInUse(email, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/registrazione.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("l'email inserita è già stata presa");
        }
    };
    xhr.send(`email=${encodeURIComponent(email)}&submit=true`);
}


// Funzione per validare la password
function validatePassword(password, confirmPassword) {
    let minLength = 8;
    let hasUpperCase = /[A-Z]/.test(password);
    let hasNumber = /\d/.test(password);
    let hasSymbol = /[\W_]/.test(password);

    if (password.length < minLength || !hasUpperCase || !hasNumber || !hasSymbol) {
        alert("La password deve essere lunga almeno 8 caratteri e contenere una lettera maiuscola, un numero e un simbolo.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Le password non corrispondono. Riprova!");
        return false;
    }

    return true;
}

// Funzione principale per inizializzare il tutto
function initializeFormValidation() {
    let emailField = document.getElementById("email");
    let passwordField = document.getElementById("password");
    let confirmPasswordField = document.getElementById("conferma-password");
    let submitButton = document.querySelector("button[type='submit']");
    let emailInUse = false;

    // Event listener per la verifica dell'email quando si perde il focus
    emailField.addEventListener("blur", function() {
        let email = emailField.value;
        if (!validateEmailFormat(email)) {
            alert("Inserisci un indirizzo email valido.");
            return;
        }
        checkEmailInUse(email, function(isInUse) {
            emailInUse = isInUse;
            if (emailInUse) {
                alert("L'email è già in uso. Scegli un'altra email.");
            }
        });
    });

    // Event listener per la verifica prima dell'invio del form
    submitButton.addEventListener("click", function(event) {
        let password = passwordField.value;
        let confirmPassword = confirmPasswordField.value;

        if (emailInUse || !validatePassword(password, confirmPassword)) {
            event.preventDefault();
        }
    });
}

// Aggiunta dell'evento DOMContentLoaded per inizializzare il form
document.addEventListener("DOMContentLoaded", initializeFormValidation);
