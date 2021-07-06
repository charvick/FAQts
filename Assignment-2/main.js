const accordioItemHeaders = document.getElementsByClassName("accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeaders => {
    accordionItemHeaders.addEventListener("click", event => {
        accordionItemHeaders.classList.toggle("active");
        const accordionItemBody = accordionItemHeaders.nextElementSibling;
        
    });
});



