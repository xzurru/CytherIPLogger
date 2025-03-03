fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    
    fetch('your_webhook_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [{
          title: "Neuer Besucher",
          description: `IP: ${data.ip}`
        }]
      })
    }).catch(error => console.error('Webhook-Fehler:', error));
  })
  .catch(error => console.error('Fehler beim Abrufen der IP:', error));
