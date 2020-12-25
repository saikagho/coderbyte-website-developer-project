document.addEventListener("DOMContentLoaded", function() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                console.log("lazy loading ", lazyImage); //to log the lazy loading img elements in logs during the respective loading on scrolling
                lazyImage.src = lazyImage.dataset.src
            }
        })
    });
    const arr = document.querySelectorAll('.lozad')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})
