document.getElementById("startBtn").addEventListener("click", async () => {

    const response = await fetch(
        "http://localhost:3000/start-server",
        {
            method: "POST"
        }
    );

    const data = await response.json();

    alert("Workflow request sent!");
});
