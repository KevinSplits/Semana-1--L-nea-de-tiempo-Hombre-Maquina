document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let direction = 'next'; // nueva variable

    function updateTimeline() {
        events.forEach((event, index) => {
            event.classList.remove('active', 'from-left', 'from-right');

            if (index === currentIndex) {
                event.classList.add('active');
                event.classList.add(direction === 'next' ? 'from-right' : 'from-left');
            }
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === events.length - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < events.length - 1) {
            direction = 'next';
            currentIndex++;
            updateTimeline();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            direction = 'prev';
            currentIndex--;
            updateTimeline();
        }
    });

    updateTimeline();
});