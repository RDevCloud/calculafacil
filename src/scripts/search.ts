// Search script: filters tools displayed in the search bar results
const input = document.getElementById('search-input') as HTMLInputElement | null;
const results = document.getElementById('search-results');

if (input && results) {
  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    const items = results.querySelectorAll<HTMLElement>('[data-title]');

    items.forEach(item => {
      const title = (item.dataset.title ?? '').toLowerCase();
      const desc  = (item.dataset.description ?? '').toLowerCase();
      item.style.display = (title.includes(query) || desc.includes(query)) ? '' : 'none';
    });

    results.style.display = query.length > 0 ? 'block' : 'none';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target as Node)) {
      results.style.display = 'none';
    }
  });
}
