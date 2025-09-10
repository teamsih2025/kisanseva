// Password show/hide toggle logic
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-password').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = btn.parentElement.querySelector('.password-input');
            var icon = btn.querySelector('img');
            if (input.type === 'password') {
                input.type = 'text';
                icon.src = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye-slash.svg';
            } else {
                input.type = 'password';
                icon.src = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye.svg';
            }
        });
    });
});

function setHindiContent() {
    document.getElementById("site-title").textContent = "किसान सेवा";
    document.getElementById("login-heading").textContent = "लॉगिन करें";
    document.getElementById("email").placeholder = "ईमेल या मोबाइल नंबर";
    document.getElementById("password").placeholder = "पासवर्ड";
    document.getElementById("login-btn").textContent = "लॉगिन";
    document.getElementById("or-text").textContent = "या";
    document.getElementById("forgot-link").textContent = "पासवर्ड भूल गए?";
    document.getElementById("signup-link").textContent = "साइन अप करें";
    document.documentElement.lang = "hi";
}
document.addEventListener("DOMContentLoaded", setHindiContent);


if (document.getElementById('send-code-btn')) {
    document.getElementById('send-code-btn').addEventListener('click', function() {
        this.style.display = 'none';
        
        var userInput = document.getElementById('user');
        if (userInput) userInput.disabled = true;
        
        var codeInput = document.getElementById('code');
        if (codeInput) codeInput.style.display = '';
        
        var pwBoxes = document.querySelectorAll('.password-box');
        pwBoxes.forEach(function(box) { box.style.display = ''; });
    
        var resetBtn = document.getElementById('reset-btn');
        if (resetBtn) resetBtn.style.display = '';
        alert('कोड भेजा गया!');
    });
}


if (document.getElementById('reset-form')) {
    document.getElementById('reset-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var code = document.getElementById('code').value;
        var newPass = document.getElementById('new-password').value;
        var retypePass = document.getElementById('retype-password').value;
        if (!code) {
            alert('कृपया कोड दर्ज करें');
            return;
        }
        if (!newPass || !retypePass) {
            alert('कृपया नया पासवर्ड और पुष्टि दर्ज करें');
            return;
        }
        if (newPass !== retypePass) {
            alert('पासवर्ड मेल नहीं खाते');
            return;
        }
        alert('पासवर्ड सफलतापूर्वक रीसेट किया गया!');
        window.location.href = 'login.html';
    });
}
