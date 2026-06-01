document.getElementById('comment-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('comment-name');
  const bodyInput = document.getElementById('comment-input');
  const name = nameInput.value.trim();
  const body = bodyInput.value.trim();

  if (!name || !body) return;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'comment', name, body })
    });
    nameInput.value = '';
    bodyInput.value = '';
    loadData();
  } catch (error) {
    alert('Erro ao comentar. Tente novamente.');
  }
});
