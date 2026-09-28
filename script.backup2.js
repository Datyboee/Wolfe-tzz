function showMessage() {
    alert("🐺 Welcome to WOLFE — We are just getting started.");
}

function sendWolfeRequest() {
  const name = document.getElementById("client-name").value.trim();
  const service = document.getElementById("client-service").value;
  const project = document.getElementById("client-project").value.trim();

  if (!name || !project) {
    alert("Please enter your name and describe your project.");
    return;
  }

  const message =
`Hello WOLFE 👋

My name is ${name}.

I'd like help with: ${service}

Project idea:
${project}

I'd like to discuss this project with WOLFE.`;

  const url = "https://wa.me/255658178812?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

