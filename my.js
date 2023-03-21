function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbyelJ175qS9tsjJQdn8uDwklD-n-fMR29OfneWf5c7Db3iM33Cv4eQ-Z7_HsG4GuV1r4A/exec"
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        })
}

document.getElementById("btn").addEventListener("click", testGS);