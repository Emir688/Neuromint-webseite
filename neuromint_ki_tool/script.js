
async function generate() {
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('output');
    output.innerHTML = "Prompt wird generiert...";

    // Platzhalter für tatsächliche KI-Verbindung
    setTimeout(() => {
        output.innerHTML = `<b>Vorschlag:</b> Erstelle eine NFT-Kollektion über: "${input}" mit futuristischen Elementen.`;
    }, 1000);
}
