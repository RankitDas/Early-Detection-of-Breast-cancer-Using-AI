document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("detection-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fileInput = document.getElementById("mammography");
        const file = fileInput.files[0];

        if (!file) {
            alert("Please upload a mammography report.");
            return;
        }

        const fileName = file.name.toLowerCase();
        
        let resultMessage = "Please upload a valid mammogram.";
        let riskLevel = "unknown";
        
        if (fileName.includes("1")) {
            resultMessage = "Low Risk: No immediate concern, but follow regular screenings.";
            riskLevel = "negative";
        } else if (fileName.includes("2")) {
            resultMessage = "Moderate Risk: Consider consulting a healthcare professional.";
            riskLevel = "moderate";
        } else if (fileName.includes("3")) {
            resultMessage = "High Risk: Immediate consultation with a doctor is advised.";
            riskLevel = "positive";
        }

        // Store result in sessionStorage to pass data to results page
        sessionStorage.setItem("riskMessage", resultMessage);
        sessionStorage.setItem("riskLevel", riskLevel);

        // Redirect to results page
        window.location.href = "results.html";
    });
});