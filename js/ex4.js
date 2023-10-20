document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(document.getElementById("form"));

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        payment: formData.get("payment"),
        promotion: formData.get("promotion"),
        location: formData.get("location")
    };

    document.getElementById("td-name").innerText = data.name;
    document.getElementById("td-email").innerText = data.email;
    document.getElementById("td-payment").innerText = data.payment;
    document.getElementById("td-promotion").innerText = data.promotion === null ? "off" : "on";
    document.getElementById("td-location").innerText = data.location;
});