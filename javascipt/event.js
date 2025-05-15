function showMore() {

    const allEvents = Array.from(document.querySelectorAll('.event'));

    const voirPlusButton = document.getElementById('voirPlus');
    let currentStartIndex = Number(voirPlusButton.dataset.index) || 0;

    const eventsPerPage = 3;

    allEvents.forEach(event => {
        event.classList.add('hidden');
        event.style.margin = ""; 
    });

    const endIndex = Math.min(currentStartIndex + eventsPerPage, allEvents.length);

    for (let i = currentStartIndex; i < endIndex; i++) {
        allEvents[i].classList.remove('hidden');
    }

    if (endIndex === allEvents.length && endIndex - currentStartIndex === 1) {
        const singleEvent = allEvents[currentStartIndex];
        singleEvent.style.margin = "0 auto"; 
    }

    currentStartIndex = endIndex % allEvents.length; 
    voirPlusButton.dataset.index = currentStartIndex;
}
