var page = document.getElementById("main"),
    element = document.getElementById("sectionchanger"),
    sectionChanger, idx = 0,
    boundry = 2;

page.addEventListener("pageshow", function() {
    /* Create the SectionChanger object */
    sectionChanger = tau.widget.SectionChanger(element, {
        circular: true,
        orientation: "horizontal",
        useBouncingEffect: true
    });
});

page.addEventListener("pagehide", function() {
    sectionChanger.destroy();
});

document.addEventListener("rotarydetent", function(event) {
    if (event.detail.direction === "CW") {
        sectionChanger.setActiveSection(sectionChanger.getActiveSectionIndex() + 1, 100);
        idx++;
        console.log("idx ", idx, " bound ", boundry);
        if (idx > boundry) {
            sectionChanger.setActiveSection(2);
            idx = 2;
        }
    } else {
        sectionChanger.setActiveSection(sectionChanger.getActiveSectionIndex() - 1, 100);
        idx--;
        console.log("idx ", idx, " bound ", boundry);
        if (idx < boundry) {
            sectionChanger.setActiveSection(0);
            idx = 0;
        }
    }
}, false);