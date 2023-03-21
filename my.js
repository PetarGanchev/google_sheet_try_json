function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbxIn1wE8fIU2xo0CNn48r9FQcI-_DKKAE4Ux2e3iyAE/dev"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        })
}

document.getElementById("btn").addEventListener("click", testGS);