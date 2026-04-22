export default function init() {
  const form = document.getElementById('tool-form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = parseFloat((document.getElementById('valor') as HTMLInputElement)?.value || '0');
    const porcentaje = parseFloat((document.getElementById('porcentaje') as HTMLInputElement)?.value || '0');
    const resultado = (valor * porcentaje) / 100;
    const resultDiv = document.getElementById('result');
    if (resultDiv) resultDiv.innerHTML = `<strong>Resultado:</strong> ${porcentaje}% de ${valor} es ${resultado.toFixed(2)}`;
  });
}