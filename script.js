
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const modalEl = document.getElementById('quoteModal');
      if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.hide();
      }
      alert('Thanks! Your quote request has been noted. We will reach out via email soon.');
      form.reset();
    });
  }
});
