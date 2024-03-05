const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
        // if (entry.isIntersecting) {
        //     entry.target.classList.add('show')
        // }
        // else {
        //     entry.target.classList.remove('show')
        // }
    }
    )
})


hiddenElements.forEach((elements) => observer.observe(elements))