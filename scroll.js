const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } 
    });
});
const hiddentElements = document.querySelectorAll(".hidden");
hiddentElements.forEach((el) => observer.observe(el));