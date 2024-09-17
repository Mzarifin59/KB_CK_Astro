document.addEventListener("DOMContentLoaded", function() {
    const accordionTriggers = document.querySelectorAll(".accordion-trigger");

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const parentItem = this.parentElement;
            const isActive = parentItem.classList.contains("active");

            // Tutup semua accordion item
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("active");
            });

            // Jika item yang diklik tidak aktif, buka accordion item tersebut
            if (!isActive) {
                parentItem.classList.add("active");
            }
        });
    });
});
