(function() {
    let afficherOnglet = function (a, animations) {
        if (animations === undefined) {
            animations = true
        }

        let li = a.parentNode;
        let div = a.parentNode.parentNode.parentNode;
        let activeTab = div.querySelector(".tab-content.active"); // contenu actif
        let aAfficher = div.querySelector(a.getAttribute("href")); // contenu à afficher
    
            if (li.classList.contains("active")) {
                return false;
            }
            div.querySelector(".tabs .active").classList.remove("active");
            li.classList.add("active");
        if (animations) {
            activeTab.classList.add("fade");
        activeTab.classList.remove("in");

        let transitionend = function () {
            this.classList.remove("fade");
            this.classList.remove("active");
            aAfficher.classList.add("active");
            aAfficher.classList.add("fade");
            aAfficher.offsetWidth;
            aAfficher.classList.add("in");
            activeTab.removeEventListener("transitionend", transitionend);
            };

        activeTab.addEventListener("transitionend", transitionend)
        }else {
            aAfficher.classList.add("active");
            activeTab.classList.remove("active");
        }
    }
    
    let tabs = document.querySelectorAll(".tabs a");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function (e) {
          afficherOnglet(this);  
        })
    };

       
    
    let hashChange = function (e) {
    let hash = window.location.hash;
    let a = document.querySelector('a[href="' + hash + '"]');
        if (a !== null && !a.classList.contains("active")) {
            afficherOnglet(a, e!== undefined);
        
        }
    }

    window.addEventListener("hashchange", hashChange);
    hashChange();  
})();