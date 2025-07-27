document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play');
    const watchButtons = document.querySelectorAll('.col button');

    // Create modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title">Now Playing</h2>
            <div class="video-placeholder">🎬 Your movie is playing...</div>
        </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    const modalTitle = modal.querySelector('#modal-title');

    // Open modal
    function openModal(title) {
        modalTitle.textContent = `Now Playing: ${title}`;
        modal.style.display = 'flex';
    }

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Event listeners for images and buttons
    playButtons.forEach((img, idx) => {
        img.addEventListener('click', () => {
            const title = img.closest('.col').querySelector('h2').textContent;
            openModal(title);
        });
    });

    watchButtons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const title = btn.closest('.col').querySelector('h2').textContent;
            openModal(title);
        });
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
