// ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// scroll suave para seções
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// formulário -> monta mensagem e abre WhatsApp
function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico = document.getElementById('servico').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  const texto =
    `Olá, meu nome é ${nome}.%0A` +
    `Telefone/WhatsApp: ${telefone}.%0A` +
    `Tenho interesse em: ${servico}.%0A` +
    (mensagem ? `%0AMensagem: ${mensagem}` : "");

  // TODO: substituir pelo número oficial da clínica
  const numero = "5599999999999";

  const url = `https://wa.me/${numero}?text=${texto}`;
  window.open(url, "_blank");

  const feedback = document.getElementById("form-feedback");
  if (feedback) {
    feedback.textContent = "Você será redirecionada(o) para o WhatsApp para concluir o envio da mensagem.";
  }

  return false;
}
