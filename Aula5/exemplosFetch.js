// exemplos de como usar a fetch() e resolver as promises
// adaptar para seus casos de uso

// EXEMPLO 1
fetch('https://url.da.api/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
// ==========

// EXEMPLO 2
async function fetchData() {
    try {
        const response = await fetch('https://url.da.api/');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

fetchData();
// ==========