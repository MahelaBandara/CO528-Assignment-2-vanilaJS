document.addEventListener('DOMContentLoaded', function() {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const radioButtons = document.querySelectorAll('input[name="angle"]');

    function updateValue(value) {
        // Ensure value is within the range 0 to 360
        const clampedValue = Math.max(0, Math.min(360, value));
        angleInput.value = clampedValue;
        if(clampedValue == 0){
            angleSlider.value = 180;
        }
        else{
            angleSlider.value = clampedValue;
        }
        
        // Uncheck all radio buttons
        radioButtons.forEach(radio => radio.checked = false);
        // Check the corresponding radio button
        const matchingRadio = document.querySelector(`input[name="angle"][value="${clampedValue}"]`);
        if (matchingRadio) matchingRadio.checked = true;
    }

    angleInput.addEventListener('input', function() {
        updateValue(parseFloat(angleInput.value));
    });

    angleSlider.addEventListener('input', function() {
        updateValue(parseFloat(angleSlider.value));
    });

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                updateValue(parseFloat(radio.value));
            }
        });
    });

    // Initialize with default value
    updateValue(parseFloat(angleInput.value));
});
