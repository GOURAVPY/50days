 const steps = document.querySelectorAll(".step");
    const bar = document.getElementById("bar");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentStep = 0;

    function updateUI() {
      steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
      });
      const progressPercent = ((currentStep + 1) / steps.length) * 100;
      bar.style.width = progressPercent + "%";

      prevBtn.disabled = currentStep === 0;
      nextBtn.disabled = currentStep === steps.length - 1;
    }

    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateUI();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateUI();
      }
    });

    updateUI();