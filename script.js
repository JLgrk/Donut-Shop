const button = document.querySelector('button');
const input = document.querySelector('#email');
const para = document.createElement('p');
const emailHeader = document.querySelector('#emailform');
const label = document.querySelector('label');

button.onclick = function() {
    emailHeader.removeChild(label);
    emailHeader.removeChild(input);
    emailHeader.removeChild(button);

    para.textContent = 'Thank you! Check your inbox for confirmation.'
    emailHeader.appendChild(para);
}