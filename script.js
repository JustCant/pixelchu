document.getElementById('skin').addEventListener('change', function(event) {
    console.log('Skin color changed to:', event.target.value);
    document.documentElement.style.setProperty('--skin-color', event.target.value);
});

document.getElementById('earsEyesNose').addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--ear-eye-nose-color', event.target.value);
});

document.getElementById('eyeGlint').addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--eye-glint-color', event.target.value);
});

document.getElementById('cheeks').addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--cheek-color', event.target.value);
});

document.getElementById('mouth').addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--mouth-color', event.target.value);
});

document.getElementById('tongue').addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--tongue-color', event.target.value);
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.documentElement.style.setProperty('--skin-color', '#ffd823');
    document.documentElement.style.setProperty('--ear-eye-nose-color', '#000');
    document.documentElement.style.setProperty('--eye-glint-color', '#ffffff');
    document.documentElement.style.setProperty('--cheek-color', '#fe2f1d');
    document.documentElement.style.setProperty('--mouth-color', '#74070a');
    document.documentElement.style.setProperty('--tongue-color', '#f45490');
});