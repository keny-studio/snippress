window.addEventListener("load", function () {

    const tocLinks = document.querySelectorAll(
        '.wp-block-rank-math-toc-block a[href^="#"]'
    );

    if (!tocLinks.length) return;

    const sections = [];

    tocLinks.forEach(link => {

        const id = decodeURIComponent(
            link.getAttribute("href").substring(1)
        );

        const section = document.getElementById(id);

        if (section) {
            sections.push({
                link: link,
                section: section
            });
        }
    });

    function updateActiveTOC() {

        let current = null;

        sections.forEach(item => {

            const rect = item.section.getBoundingClientRect();

            // section currently near top of viewport
            if (rect.top <= 200 && rect.bottom >= 200) {
                current = item;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove("toc-active");
        });

        if (current) {
            tocLinks.forEach(link => {
    link.style.color = "";
    link.style.fontWeight = "";
});

current.link.style.color = "#b4850e";
current.link.style.fontWeight = "600";
            console.log("ACTIVE:", current.link.textContent);
        }
    }

    window.addEventListener("scroll", updateActiveTOC);

    updateActiveTOC();
});
