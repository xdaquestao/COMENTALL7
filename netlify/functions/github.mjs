if (action === 'comment') {
  const { name, body } = JSON.parse(event.body);
  const commentBody = `**${name}**\n\n${body}`;
  
  const commentRes = await fetch(`${GITHUB_API}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ body: commentBody })
  });
  const data = await commentRes.json();
  return {
    statusCode: 201,
    body: JSON.stringify(data)
  };
}
