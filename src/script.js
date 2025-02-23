document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");

            accordions.forEach(acc => {
                acc.classList.remove("active");
                acc.querySelector(".accordion-content").style.maxHeight = null;
                acc.querySelector(".icon").textContent = "+";
            });

            if (!isOpen) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector(".icon").textContent = "-";
            } else {
                item.classList.remove("active");
                content.style.maxHeight = null;
                header.querySelector(".icon").textContent = "+";
            }
        });
    });
});
