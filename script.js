document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateTimeline() {
        events.forEach((event, index) => {
            if (index === currentIndex) {
                event.classList.add('active');
            } else {
                event.classList.remove('active');
            }
        });

        // Deshabilitar botones en los extremos
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === events.length - 1;
    }

    // Navegar al evento anterior
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTimeline();
        }
    });

    // Navegar al siguiente evento
    nextBtn.addEventListener('click', () => {
        if (currentIndex < events.length - 1) {
            currentIndex++;
            updateTimeline();
        }
    });

    // Inicializar la línea de tiempo
    updateTimeline();
});