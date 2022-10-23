const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("selected")) {
            return;
        }

        selectTab(tab);
        showTabInfos(tab);

    });
        
});

function selectTab(tab){
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");
    tab.classList.add("selected");
}

function showTabInfos(tab){
    const infoSelected = document.querySelector(".info.selected");
    infoSelected.classList.remove("selected");
    const elementIdAndtabId = `info-${tab.id}`;
    const infoToShow = document.getElementById(elementIdAndtabId);
    infoToShow.classList.add("selected");
}