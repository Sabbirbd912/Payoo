document.getElementById("login-btn").addEventListener("click", function() {
    // console.log("Login button clicked");
    const numberInput = document.getElementById("input-number");
    const ContactNumber = numberInput.value;
    console.log(ContactNumber);

    const passwordInput = document.getElementById("input-password");
    const pin = passwordInput.value;
    console.log(pin);

    if (ContactNumber === "01234567890" && pin === "1234") {
        alert("Login successful!");
        window.location.assign("home.html");
    } else {
        alert("Invalid contact number or PIN.");
        return
    }
});