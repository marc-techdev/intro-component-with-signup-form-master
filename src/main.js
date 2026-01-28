const form = document.querySelector('#signup-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const group = input.closest('.input-group');
        const errorIcon = group.querySelector('.error-icon');
        const errorMsg = group.querySelector('.error-msg');

        let isValid = true;

        if (input.value.trim() === '') {
            isValid = false;
            if (input.type !== 'email') {
                errorMsg.textContent = `${input.placeholder} cannot be empty`;
            }
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            errorMsg.textContent = "Looks like this is not an email";
            input.classList.add('text-brand-red');
        }

        if (!isValid) {
            input.classList.add('border-brand-red', 'border-2');
            input.classList.remove('border-muted-purple/50');
            errorIcon.classList.remove('hidden');
            errorMsg.classList.remove('hidden');
            input.placeholder = "";
        } else {
            input.classList.remove('border-brand-red', 'border-2', 'text-brand-red');
            input.classList.add('border-muted-purple/50');
            errorIcon.classList.add('hidden');
            errorMsg.classList.add('hidden');
        }
    });
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}