/* =========================================================
   TASTE QR MENU
   Language + Side Menu + Menu Modal
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const splashScreen = document.getElementById("splashScreen");
    const homePage = document.getElementById("homePage");

    const menuBtn = document.getElementById("menuBtn");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");

    const languageBtn = document.getElementById("languageBtn");

    const viewMenuBtn = document.getElementById("viewMenuBtn");

    const menuModal = document.getElementById("menuModal");
    const closeMenuModal = document.getElementById("closeMenuModal");

const bottomNav =
    document.getElementById("bottomNav");
    /* =====================================================
       CURRENT LANGUAGE

       en = English
       ar = Arabic
    ===================================================== */

    let currentLanguage = "en";


    /* =====================================================
       SPLASH SCREEN
    ===================================================== */

setTimeout(function () {

    if (splashScreen) {

        splashScreen.classList.add("hide");

    }


    if (homePage) {

        homePage.classList.remove("hidden");

    }


    if (bottomNav) {

        bottomNav.classList.add("show");

    }

}, 2400);

    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            smallTitle: "WELCOME TO TASTE",

            heroTitle:
                "Delicious Food<br><span>Happier People</span>",

            heroDescription:
                "Fresh ingredients.<br>Great taste. Always.",

            viewMenu:
                'View Our Menu <span class="menu-arrow">→</span>',

            call: "Call",

            location: "Location",

            hours: "Hours",

            instagram: "Instagram",

            sideMenu:
                "Our Menu",

            offers:
                "Offers",

            about:
                "About Us",

            contact:
                "Contact",

            modalTitle:
                "Our Menu",

            burgers:
                "Burgers",

            sandwich:
                "Sandwich",

            platter:
                "Platter",

            appetizers:
                "Appetizers",

            hotDrinks:
                "Hot drinks",

            coldDrinks:
                "Cold drinks",

            items12:
                "12 items",

            items10:
                "10 items",

            items8:
                "8 items",

            items6:
                "6 items"

        },


        ar: {

            smallTitle: "أهلاً بكم في TASTE",

            heroTitle:
                "طعام لذيذ<br><span>وأوقات أجمل</span>",

            heroDescription:
                "مكونات طازجة.<br>طعم رائع دائماً.",

            viewMenu:
                'شاهد قائمتنا <span class="menu-arrow">←</span>',


            sideMenu:
                "قائمتنا",

            offers:
                "العروض",

            about:
                "من نحن",

            contact:
                "اتصل بنا",

            modalTitle:
                "قائمتنا",

            burgers:
                "برغر",

            sandwich:
                "ساندويش",

            platter:
                "وجبات",

            appetizers:
                "مقبلات",

            hotDrinks:
                "مشروبات ساخنة",

            coldDrinks:
                "مشروبات باردة",

            items12:
                "12 صنف",

            items10:
                "10 أصناف",

            items8:
                "8 أصناف",

            items6:
                "6 أصناف"

        }

    };


    /* =====================================================
       UPDATE LANGUAGE
       تغيير كل النصوص حسب اللغة
    ===================================================== */

    function updateLanguage() {

        const lang = translations[currentLanguage];


        /* =================================================
           اتجاه الصفحة
        ================================================= */

        if (currentLanguage === "ar") {

            document.documentElement.lang = "ar";

            document.documentElement.dir = "rtl";

            document.body.classList.add("arabic");

        } else {

            document.documentElement.lang = "en";

            document.documentElement.dir = "ltr";

            document.body.classList.remove("arabic");

        }


        /* =================================================
           زر اللغة

           الصفحة إنكليزي → الزر يعرض AR
           الصفحة عربي → الزر يعرض EN
        ================================================= */

        if (languageBtn) {

            if (currentLanguage === "en") {

                languageBtn.innerHTML =
                    'AR <span>⌄</span>';

            } else {

                languageBtn.innerHTML =
                    'EN <span>⌄</span>';

            }

        }


        /* =================================================
           HOME
        ================================================= */

        const smallTitle =
            document.querySelector(".small-title");

        if (smallTitle) {
            smallTitle.innerHTML = lang.smallTitle;
        }


        const heroTitle =
            document.querySelector(".hero h2");

        if (heroTitle) {
            heroTitle.innerHTML = lang.heroTitle;
        }


        const heroDescription =
            document.querySelector(".hero-description");

        if (heroDescription) {
            heroDescription.innerHTML =
                lang.heroDescription;
        }


        if (viewMenuBtn) {

            viewMenuBtn.innerHTML =
                lang.viewMenu;

        }


        


        /* =================================================
           SIDE MENU
        ================================================= */

        const sideMenuText =
            document.getElementById("sideMenuText");

        if (sideMenuText) {
            sideMenuText.textContent = lang.sideMenu;
        }


        const offersText =
            document.getElementById("offersText");

        if (offersText) {
            offersText.textContent = lang.offers;
        }


        const aboutText =
            document.getElementById("aboutText");

        if (aboutText) {
            aboutText.textContent = lang.about;
        }


        const contactText =
            document.getElementById("contactText");

        if (contactText) {
            contactText.textContent = lang.contact;
        }


        /* =================================================
           MENU MODAL TITLE
        ================================================= */

        const menuModalTitle =
            document.getElementById("menuModalTitle");

        if (menuModalTitle) {
            menuModalTitle.textContent =
                lang.modalTitle;
        }


        /* =================================================
           CATEGORY NAMES
        ================================================= */

        const categoryCards =
            document.querySelectorAll(".category-card");


               categoryCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");

            const title =
                card.querySelector("h3");

            const items =
                card.querySelector(".category-info span");

            if (!title || !items) {
                return;
            }

            if (category === "burgers") {

                title.textContent = lang.burgers;
                items.textContent = lang.items12;

            }

            else if (category === "sandwich") {

                title.textContent = lang.sandwich;
                items.textContent = lang.items10;

            }

            else if (category === "platter") {

                title.textContent = lang.platter;
                items.textContent = lang.items8;

            }

            else if (category === "appetizers") {

                title.textContent = lang.appetizers;
                items.textContent = lang.items6;

            }

            else if (category === "hot-drinks") {

                title.textContent = lang.hotDrinks;
                items.textContent = lang.items10;

            }

            else if (category === "cold-drinks") {

                title.textContent = lang.coldDrinks;
                items.textContent = lang.items6;

            }

        });


    /* =====================================================
   GENERAL TRANSLATION
   ترجمة كل العناصر التي فيها data-en و data-ar
===================================================== */

const languageElements =
    document.querySelectorAll("[data-en][data-ar]");

languageElements.forEach(function (element) {

    const englishText =
        element.getAttribute("data-en");

    const arabicText =
        element.getAttribute("data-ar");

    if (currentLanguage === "ar") {

        element.innerHTML = arabicText;

    } else {

        element.innerHTML = englishText;

    }

});

    }


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */
languageBtn.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

    } else {

        currentLanguage = "en";

    }

    updateLanguage();

    updateSearchPlaceholder();

});

    


    /* =====================================================
       INITIAL LANGUAGE
       البداية دائماً English
    ===================================================== */

    updateLanguage();


    /* =====================================================
       SIDE MENU - OPEN
    ===================================================== */

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            if (sideMenu) {
                sideMenu.classList.add("open");
            }

        });

    }


    /* =====================================================
       SIDE MENU - CLOSE
    ===================================================== */

    if (closeMenu) {

        closeMenu.addEventListener("click", function () {

            if (sideMenu) {
                sideMenu.classList.remove("open");
            }

        });

    }


    /* =====================================================
       OPEN MENU MODAL
    ===================================================== */

    function openMenuModal() {

        /* إغلاق القائمة الجانبية */

        if (sideMenu) {
            sideMenu.classList.remove("open");
        }


        /* فتح مودال القائمة */

        if (menuModal) {
            menuModal.classList.add("open");
        }


        /* منع Scroll الصفحة بالخلف */

        document.body.classList.add("modal-open");

    }


    /* =====================================================
       VIEW OUR MENU
    ===================================================== */

    if (viewMenuBtn) {

        viewMenuBtn.addEventListener("click", function () {

            openMenuModal();

        });

    }


    /* =====================================================
       OUR MENU FROM SIDE MENU
    ===================================================== */

    const sideMenuText =
        document.getElementById("sideMenuText");

    if (sideMenuText) {

        sideMenuText.addEventListener("click", function () {

            openMenuModal();

        });

    }


    /* =====================================================
       CLOSE MENU MODAL
    ===================================================== */

    if (closeMenuModal) {

        closeMenuModal.addEventListener("click", function () {

            if (menuModal) {
                menuModal.classList.remove("open");
            }

            document.body.classList.remove("modal-open");

        });

    }


    /* =====================================================
       CLICK OUTSIDE MODAL
    ===================================================== */

    if (menuModal) {

        menuModal.addEventListener("click", function (event) {

            if (event.target === menuModal) {

                menuModal.classList.remove("open");

                document.body.classList.remove("modal-open");

            }

        });

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (menuModal) {
                menuModal.classList.remove("open");
            }

            if (sideMenu) {
                sideMenu.classList.remove("open");
            }

            document.body.classList.remove("modal-open");

        }

    });


   /* =====================================================
   CATEGORY CARDS
===================================================== */

const categoryCards =
    document.querySelectorAll(
        ".category-card"
    );


categoryCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const category =
                card.getAttribute(
                    "data-category"
                );

            openCategory(category);

        }
    );

});

/* =====================================================
   BACK TO CATEGORIES
===================================================== */

if (backToCategories) {

    backToCategories.addEventListener(
        "click",
        function () {

            productsModal.classList.remove(
                "open"
            );

            if (menuModal) {

                menuModal.classList.add(
                    "open"
                );

            }

        }
    );

}
    /* =====================================================
   BOTTOM NAVIGATION
===================================================== */

const homeNavBtn =
    document.getElementById("homeNavBtn");

const cartNavBtn =
    document.getElementById("cartNavBtn");


/* =====================================================
   HOME
===================================================== */

if (homeNavBtn) {

    homeNavBtn.addEventListener("click", function () {

        /*
           إزالة التحديد عن باقي الأزرار
        */

        document
            .querySelectorAll(".bottom-nav-item")
            .forEach(function (item) {

                item.classList.remove("active");

            });


        /*
           تفعيل Home
        */

        homeNavBtn.classList.add("active");


        /*
           إغلاق المودال إذا كان مفتوحاً
        */

        if (menuModal) {

            menuModal.classList.remove("open");

        }

        document.body.classList.remove("modal-open");


        /*
           إغلاق القائمة الجانبية
        */

        if (sideMenu) {

            sideMenu.classList.remove("open");

        }


        /*
           الرجوع إلى أعلى الصفحة
        */

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================================
   SEARCH
===================================================== */

const searchModal =
    document.getElementById("searchModal");

const searchNavBtn =
    document.getElementById("searchNavBtn");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");
/* =====================================================
   SEARCH PLACEHOLDER
===================================================== */

function updateSearchPlaceholder() {

    if (!searchInput) {
        return;
    }

    if (currentLanguage === "ar") {

        searchInput.placeholder =
            searchInput.getAttribute(
                "data-placeholder-ar"
            );

    } else {

        searchInput.placeholder =
            searchInput.getAttribute(
                "data-placeholder-en"
            );

    }

}

const searchResults =
    document.getElementById("searchResults");

const clearSearch =
    document.getElementById("clearSearch");
updateSearchPlaceholder();

/* =====================================================
   OPEN SEARCH
===================================================== */

if (searchNavBtn) {

    searchNavBtn.addEventListener(
        "click",
        function () {

            /* إزالة Active عن الأزرار */

            document
                .querySelectorAll(".bottom-nav-item")
                .forEach(function (item) {

                    item.classList.remove("active");

                });


            /* تفعيل Search */

            searchNavBtn.classList.add("active");


            /* فتح شاشة البحث */

            if (searchModal) {

                searchModal.classList.add("open");

            }


            /* منع تحريك الصفحة بالخلف */

            document.body.classList.add("modal-open");


            /* التركيز على خانة البحث */

            setTimeout(function () {

                if (searchInput) {

                    searchInput.focus();

                }

            }, 200);

        }
    );

}


/* =====================================================
   CLOSE SEARCH
===================================================== */

if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        function () {

            searchModal.classList.remove("open");

            document.body.classList.remove(
                "modal-open"
            );


            searchInput.value = "";

            clearSearch.classList.remove("show");


            showEmptySearch();

        }
    );

}


/* =====================================================
   SEARCH PRODUCTS
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                searchInput.value
                    .trim()
                    .toLowerCase();


            /* إظهار زر X */

            if (searchText.length > 0) {

                clearSearch.classList.add("show");

            } else {

                clearSearch.classList.remove("show");

            }


            /* إذا البحث فارغ */

            if (searchText === "") {

                showEmptySearch();

                return;

            }


            searchProducts(searchText);

        }
    );

}


/* =====================================================
   SEARCH FUNCTION
===================================================== */

function searchProducts(searchText) {

    const allProducts =
        document.querySelectorAll(
            ".product-card"
        );


    const results = [];


    allProducts.forEach(
        function (productCard) {

            const title =
                productCard.querySelector("h3");

            if (!title) {
                return;
            }


            const englishName =
                (
                    title.getAttribute("data-en") ||
                    title.textContent ||
                    ""
                ).toLowerCase();


            const arabicName =
                (
                    title.getAttribute("data-ar") ||
                    ""
                ).toLowerCase();


            const descriptionElement =
                productCard.querySelector("p");


            const englishDescription =
                descriptionElement
                    ? (
                        descriptionElement.getAttribute(
                            "data-en"
                        ) ||
                        ""
                    ).toLowerCase()
                    : "";


            const arabicDescription =
                descriptionElement
                    ? (
                        descriptionElement.getAttribute(
                            "data-ar"
                        ) ||
                        ""
                    ).toLowerCase()
                    : "";


            const matches =
                englishName.includes(searchText) ||
                arabicName.includes(searchText) ||
                englishDescription.includes(searchText) ||
                arabicDescription.includes(searchText);


            if (matches) {

                results.push(productCard);

            }

        }
    );


    displaySearchResults(results);

}


/* =====================================================
   DISPLAY RESULTS
===================================================== */

function displaySearchResults(products) {

    searchResults.innerHTML = "";


    if (products.length === 0) {

        searchResults.innerHTML = `

            <div class="search-no-results">

                <h3>No products found</h3>

                <p>
                    Try another name or keyword.
                </p>

            </div>

        `;

        return;

    }


    products.forEach(
        function (productCard) {

            const title =
                productCard.querySelector("h3");


            const description =
                productCard.querySelector("p");


            const image =
                productCard.querySelector("img");


            const price =
                productCard.querySelector(
                    ".product-price"
                );


            const originalAddButton =
                productCard.querySelector(
                    ".add-product-btn"
                );


            const englishName =
                title
                    ? (
                        title.getAttribute("data-en") ||
                        title.textContent
                    ).trim()
                    : "";


            const imageSrc =
                image
                    ? image.src
                    : "";


            const priceText =
                price
                    ? price.textContent.trim()
                    : "";


            const descriptionText =
                description
                    ? (
                        description.getAttribute("data-en") ||
                        description.textContent
                    ).trim()
                    : "";


            const result =
                document.createElement("div");


            result.className =
                "search-result-item";


            result.innerHTML = `

                <div class="search-result-image">

                    <img
                        src="${imageSrc}"
                        alt="${englishName}">

                </div>


                <div class="search-result-info">

                    <h3>
                        ${englishName}
                    </h3>

                    ${
                        descriptionText
                            ? `<p>${descriptionText}</p>`
                            : ""
                    }

                    <span
                        class="search-result-price">
                        ${priceText}
                    </span>

                </div>


                <button
                    type="button"
                    class="search-result-add">
                    +
                </button>

            `;


            /* زر + */

            const resultButton =
                result.querySelector(
                    ".search-result-add"
                );


            resultButton.addEventListener(
                "click",
                function () {

                    /*
                       نضغط على زر المنتج الأصلي
                       حتى يفتح نفس Product Details
                    */

                    if (originalAddButton) {

                        originalAddButton.click();

                    }


                    /* إغلاق البحث */

                    searchModal.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "modal-open"
                    );

                }
            );


            searchResults.appendChild(result);

        }
    );

}


/* =====================================================
   EMPTY SEARCH
===================================================== */

function showEmptySearch() {

    searchResults.innerHTML = `

        <div class="search-empty">

            <div class="search-empty-icon">
                ⌕
            </div>

            <h3>
                Search our menu
            </h3>

            <p>
                Find your favorite food and drinks
            </p>

        </div>

    `;

}


/* =====================================================
   CLEAR SEARCH
===================================================== */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        function () {

            searchInput.value = "";

            clearSearch.classList.remove(
                "show"
            );

            searchInput.focus();

            showEmptySearch();

        }
    );

}

/* =====================================================
   CART
===================================================== */

if (cartNavBtn) {

    cartNavBtn.addEventListener("click", function () {

        /*
           إزالة Active
        */

        document
            .querySelectorAll(".bottom-nav-item")
            .forEach(function (item) {

                item.classList.remove("active");

            });


        /*
           تفعيل السلة
        */

        cartNavBtn.classList.add("active");

        console.log("Cart clicked");

    });

}

});

/* =====================================================
   PRODUCTS MODAL
===================================================== */

const productsModal =
    document.getElementById("productsModal");

const productsCategoryTitle =
    document.getElementById("productsCategoryTitle");

const backToCategories =
    document.getElementById("backToCategories");


/* =====================================================
   OPEN CATEGORY
===================================================== */

function openCategory(category) {

    /* إخفاء كل الأقسام */

    const categories =
        document.querySelectorAll(
            ".products-category"
        );

    categories.forEach(function (item) {

        item.style.display = "none";

    });


    /* إظهار القسم المطلوب */

    const selectedCategory =
        document.querySelector(
            '.products-category[data-category="' +
            category +
            '"]'
        );


    if (!selectedCategory) {

        console.log(
            "Category not found:",
            category
        );

        return;
    }


    selectedCategory.style.display =
        "flex";


    /* اسم القسم */

    const categoryCard =
        document.querySelector(
            '.category-card[data-category="' +
            category +
            '"]'
        );


    if (categoryCard) {

        const title =
            categoryCard.querySelector(
                "h3"
            );

        if (title) {

            productsCategoryTitle.textContent =
                title.textContent;

        }

    }


/* فتح المودال */

productsModal.classList.add("open");

/* نرجع لأعلى */

productsModal.scrollTop = 0;

}

/* =====================================================
   PRODUCT DETAILS
===================================================== */

const productDetailsModal =
    document.getElementById("productDetailsModal");

const closeProductDetails =
    document.getElementById("closeProductDetails");

const productDetailsImage =
    document.getElementById("productDetailsImage");

const productDetailsName =
    document.getElementById("productDetailsName");

const productDetailsDescription =
    document.getElementById("productDetailsDescription");

const productDetailsPrice =
    document.getElementById("productDetailsPrice");

    const sizeOptionSection =
    document.getElementById("sizeOptionSection");

const extrasOptionSection =
    document.getElementById("extrasOptionSection");
    
const productQuantity =
    document.getElementById("productQuantity");

const decreaseQuantity =
    document.getElementById("decreaseQuantity");

const increaseQuantity =
    document.getElementById("increaseQuantity");

const productTotalPrice =
    document.getElementById("productTotalPrice");

const addProductToCart =
    document.getElementById("addProductToCart");


let selectedProductPrice = 0;
let selectedSizePrice = 0;
let selectedQuantity = 1;


/* =====================================================
   OPEN PRODUCT DETAILS
===================================================== */

document.querySelectorAll(".add-product-btn")
.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard =
            button.closest(".product-card");

        const productsCategory =
            productCard
                ? productCard.closest(".products-category")
                : null;

        const category =
            productsCategory
                ? productsCategory.getAttribute("data-category")
                : "";

        const isDrink =
            category === "hot-drinks" ||
            category === "cold-drinks";

        /* ===============================
           IMAGE
        =============================== */

        const imageElement =
            productCard.querySelector(
                ".product-image img"
            );

        if (imageElement) {

            productDetailsImage.src =
                imageElement.src;

        }


        /* ===============================
           NAME
        =============================== */

        const nameElement =
            productCard.querySelector(
                ".product-info h3"
            );

        const nameEn =
            nameElement
                ? nameElement.getAttribute("data-en")
                : "";

        const nameAr =
            nameElement
                ? nameElement.getAttribute("data-ar")
                : "";


        /* ===============================
           DESCRIPTION
        =============================== */

        const descriptionElement =
            productCard.querySelector(
                ".product-info p"
            );

        const descriptionEn =
            descriptionElement
                ? descriptionElement.getAttribute("data-en")
                : "";

        const descriptionAr =
            descriptionElement
                ? descriptionElement.getAttribute("data-ar")
                : "";


        /* ===============================
           PRICE
        =============================== */

        const priceElement =
            productCard.querySelector(
                ".product-price"
            );

        let priceText =
            priceElement
                ? priceElement.textContent
                : "0";

        priceText =
            priceText.replace("$", "").trim();

        const price =
            parseFloat(priceText);


        /* ===============================
           SAVE PRODUCT DATA
        =============================== */

        selectedProductPrice =
            isNaN(price) ? 0 : price;

        selectedSizePrice = 0;

        selectedQuantity = 1;


        /* ===============================
           PRODUCT IMAGE
        =============================== */

        if (imageElement) {

            productDetailsImage.src =
                imageElement.src;

        }


        /* ===============================
           PRODUCT NAME
        =============================== */

        if (
            document.documentElement.lang === "ar"
        ) {

            productDetailsName.textContent =
                nameAr || nameEn;

        } else {

            productDetailsName.textContent =
                nameEn || nameAr;

        }


        /* ===============================
           PRODUCT DESCRIPTION
        =============================== */

        if (
            document.documentElement.lang === "ar"
        ) {

            productDetailsDescription.textContent =
                descriptionAr || descriptionEn;

        } else {

            productDetailsDescription.textContent =
                descriptionEn || descriptionAr;

        }


        /* ===============================
           PRICE
        =============================== */

        productDetailsPrice.textContent =
            "$" +
            selectedProductPrice.toFixed(2);


        /* ===============================
           QUANTITY
        =============================== */

        productQuantity.textContent =
            selectedQuantity;


        /* ===============================
           RESET EXTRAS
        =============================== */

        productDetailsModal
            .querySelectorAll(
                ".extra-option input"
            )
            .forEach(function (checkbox) {

                checkbox.checked = false;

            });


        /* ===============================
           RESET SIZE
        =============================== */

        document
            .querySelectorAll(".size-option")
            .forEach(function (option) {

                option.classList.remove("active");

            });


        const firstSize =
            document.querySelector(
                ".size-option"
            );

        if (firstSize) {

            firstSize.classList.add("active");

        }


        /* ===============================
           CALCULATE TOTAL
        =============================== */

        updateProductTotal();

if (isDrink) {

    if (sizeOptionSection) {
        sizeOptionSection.style.display = "none";
    }

    if (extrasOptionSection) {
        extrasOptionSection.style.display = "none";
    }

    selectedSizePrice = 0;

} else {

    if (sizeOptionSection) {
        sizeOptionSection.style.display = "";
    }

    if (extrasOptionSection) {
        extrasOptionSection.style.display = "";
    }

}
        /* ===============================
           OPEN PRODUCT DETAILS
        =============================== */

        productDetailsModal.classList.add("open");

        document.body.classList.add("modal-open");

    });

});

/* =====================================================
   SIZE
===================================================== */

document.querySelectorAll(".size-option")
.forEach(function (option) {

    option.addEventListener("click", function () {

        document
            .querySelectorAll(".size-option")
            .forEach(function (item) {

                item.classList.remove("active");

            });


        option.classList.add("active");


        selectedSizePrice =
            parseFloat(
                option.getAttribute("data-price")
            );


        updateProductTotal();

    });

});


/* =====================================================
   EXTRAS
===================================================== */

productDetailsModal
.querySelectorAll(".extra-option input")
.forEach(function (checkbox) {

    checkbox.addEventListener(
        "change",
        function () {

            updateProductTotal();

        }
    );

});


/* =====================================================
   QUANTITY +
===================================================== */

increaseQuantity.addEventListener(
    "click",
    function () {

        selectedQuantity++;

        productQuantity.textContent =
            selectedQuantity;

        updateProductTotal();

    }
);


/* =====================================================
   QUANTITY -
===================================================== */

decreaseQuantity.addEventListener(
    "click",
    function () {

        if (selectedQuantity > 1) {

            selectedQuantity--;

            productQuantity.textContent =
                selectedQuantity;

            updateProductTotal();

        }

    }
);


/* =====================================================
   CALCULATE TOTAL
===================================================== */

function updateProductTotal() {

    let extrasTotal = 0;


    productDetailsModal
    .querySelectorAll(
        ".extra-option input:checked"
    )
    .forEach(function (checkbox) {

        extrasTotal +=
            parseFloat(
                checkbox.getAttribute(
                    "data-extra-price"
                )
            );

    });


    const singlePrice =
        selectedProductPrice +
        selectedSizePrice +
        extrasTotal;


    const total =
        singlePrice * selectedQuantity;


    productTotalPrice.textContent =
        "$" + total.toFixed(2);

}

/* =====================================================
   CART SYSTEM
===================================================== */


/* السلة */

let cartItems = [];


/* عناصر السلة */

const cartModal =
    document.getElementById("cartModal");

const closeCartModal =
    document.getElementById("closeCartModal");

const cartItemsContainer =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartTax =
    document.getElementById("cartTax");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");

const clearCartBtn =
    document.getElementById("clearCartBtn");

const whatsappOrderBtn =
    document.getElementById("whatsappOrderBtn");


/* =====================================================
   ADD TO CART
===================================================== */

if (addProductToCart) {

    addProductToCart.addEventListener(
        "click",
        function () {

            /* ===============================
               PRODUCT NAME
            =============================== */

            const productName =
                productDetailsName.textContent;


            /* ===============================
               PRODUCT DESCRIPTION
            =============================== */

            const productDescription =
                productDetailsDescription.textContent;


            /* ===============================
               PRODUCT IMAGE
            =============================== */

            const productImage =
                productDetailsImage.src;


            /* ===============================
               EXTRAS
            =============================== */

            const extras = [];

            productDetailsModal
                .querySelectorAll(
                    ".extra-option input:checked"
                )
                .forEach(function (checkbox) {

                    const label =
                        checkbox
                            .closest(".extra-option")
                            .querySelector("span span");

                    const extraName =
                        label
                            ? label.textContent.trim()
                            : "Extra";

                    const extraPrice =
                        parseFloat(
                            checkbox.getAttribute(
                                "data-extra-price"
                            )
                        ) || 0;

                    extras.push({

                        name: extraName,

                        price: extraPrice

                    });

                });


            /* ===============================
               SIZE
            =============================== */

            const activeSize =
                productDetailsModal.querySelector(
                    ".size-option.active"
                );


            let sizeName = "Regular";

            let sizePrice = 0;


            if (activeSize) {

                sizeName =
                    activeSize.textContent.trim();

                sizePrice =
                    parseFloat(
                        activeSize.getAttribute(
                            "data-price"
                        )
                    ) || 0;

            }


            /* ===============================
               FINAL PRICE
            =============================== */

            const finalPrice =
                parseFloat(
                    productTotalPrice.textContent
                        .replace("$", "")
                        .trim()
                ) || 0;


            /* ===============================
               ADD ITEM
            =============================== */

            const cartItem = {

                id: Date.now(),

                name:
                    productName,

                description:
                    productDescription,

                image:
                    productImage,

                size:
                    sizeName,

                sizePrice:
                    sizePrice,

                extras:
                    extras,

                quantity:
                    selectedQuantity,

                total:
                    finalPrice

            };


            cartItems.push(cartItem);


            /* تحديث السلة */

            updateCart();


            /* إغلاق تفاصيل المنتج */

            productDetailsModal.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    if (!cartItemsContainer) {
        return;
    }


    /* تنظيف */

    cartItemsContainer.innerHTML = "";


    /* إذا السلة فاضية */

    if (cartItems.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                  <span
        data-en="Your cart is empty"
        data-ar="سلة المشتريات فارغة">
        Your cart is empty
    </span>

            </div>

        `;

        cartSubtotal.textContent = "$0.00";

        cartTax.textContent = "$0.00";

        cartTotal.textContent = "$0.00";

        updateCartCount();

        return;

    }


    let subtotal = 0;


    /* عرض المنتجات */

    cartItems.forEach(function (item) {

        subtotal += item.total;


        const itemElement =
            document.createElement("div");


        itemElement.className =
            "cart-item";


        /* Extras */

        let extrasText = "";


        if (item.extras.length > 0) {

            extrasText =
                item.extras
                    .map(function (extra) {

                        return extra.name;

                    })
                    .join(", ");

        }


        itemElement.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}">

            </div>


            <div class="cart-item-info">

                <div class="cart-item-name">

                    ${item.name}

                </div>


                <div class="cart-item-options">

                    ${item.size}

                    ${
                        extrasText
                        ? " • " + extrasText
                        : ""
                    }

                </div>


                <div class="cart-item-price">

                    $${item.total.toFixed(2)}

                </div>


                <div class="cart-item-controls">

                    <button
                        class="cart-quantity-btn"
                        data-action="decrease"
                        data-id="${item.id}">

                        −

                    </button>


                    <span class="cart-quantity">

                        ${item.quantity}

                    </span>


                    <button
                        class="cart-quantity-btn"
                        data-action="increase"
                        data-id="${item.id}">

                        +

                    </button>

                </div>

            </div>


            <button
                class="cart-remove-btn"
                data-action="remove"
                data-id="${item.id}">

                ×

            </button>

        `;


        cartItemsContainer.appendChild(
            itemElement
        );

    });


    /* TAX */

    const tax = 0;


    /* TOTAL */

    const total =
        subtotal + tax;


    cartSubtotal.textContent =
        "$" + subtotal.toFixed(2);


    cartTax.textContent =
        "$" + tax.toFixed(2);


    cartTotal.textContent =
        "$" + total.toFixed(2);


    /* عدد المنتجات */

    updateCartCount();

}


/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    if (!cartCount) {
        return;
    }


    let count = 0;


    cartItems.forEach(function (item) {

        count += item.quantity;

    });


    cartCount.textContent =
        count;

}


/* =====================================================
   CART BUTTONS
===================================================== */

if (cartItemsContainer) {

    cartItemsContainer.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) {
                return;
            }


            const id =
                Number(
                    button.getAttribute(
                        "data-id"
                    )
                );


            const action =
                button.getAttribute(
                    "data-action"
                );


            const item =
                cartItems.find(
                    function (cartItem) {

                        return cartItem.id === id;

                    }
                );


            if (!item) {
                return;
            }


            /* زيادة */

            if (action === "increase") {

                item.quantity++;


                const singlePrice =
                    item.total /
                    (
                        item.quantity - 1
                    );


                item.total =
                    singlePrice *
                    item.quantity;

            }


            /* نقصان */

            else if (
                action === "decrease"
            ) {

                if (item.quantity > 1) {

                    const singlePrice =
                        item.total /
                        item.quantity;


                    item.quantity--;


                    item.total =
                        singlePrice *
                        item.quantity;

                }

            }


            /* حذف */

            else if (
                action === "remove"
            ) {

                cartItems =
                    cartItems.filter(
                        function (cartItem) {

                            return cartItem.id !== id;

                        }
                    );

            }


            updateCart();

        }
    );

}


/* =====================================================
   OPEN CART
===================================================== */

if (cartNavBtn) {

    cartNavBtn.addEventListener(
        "click",
        function () {

            /* إزالة Active */

            document
                .querySelectorAll(
                    ".bottom-nav-item"
                )
                .forEach(function (item) {

                    item.classList.remove(
                        "active"
                    );

                });


            /* تفعيل Cart */

            cartNavBtn.classList.add(
                "active"
            );


            /* تحديث */

            updateCart();


            /* فتح السلة */

            if (cartModal) {

                cartModal.classList.add(
                    "open"
                );

            }


            document.body.classList.add(
                "modal-open"
            );

        }
    );

}


/* =====================================================
   CLOSE CART
===================================================== */

if (closeCartModal) {

    closeCartModal.addEventListener(
        "click",
        function () {

            cartModal.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }
    );

}


/* =====================================================
   CLEAR CART
===================================================== */

if (clearCartBtn) {

    clearCartBtn.addEventListener(
        "click",
        function () {

            cartItems = [];

            updateCart();

        }
    );

}

/* =====================================================
   WHATSAPP ORDER
===================================================== */

if (whatsappOrderBtn) {

    whatsappOrderBtn.addEventListener(
        "click",
        function () {

            /* ===============================
               CHECK CART
            =============================== */

            if (cartItems.length === 0) {

                alert("Your cart is empty.");

                return;

            }


            /* ===============================
               ORDER TYPE
            =============================== */

            const activeOrderType =
                document.querySelector(
                    ".order-type-btn.active"
                );


            const orderType =
                activeOrderType
                    ? activeOrderType.getAttribute(
                        "data-order"
                    )
                    : "Dine In";


            /* ===============================
               TABLE NUMBER
            =============================== */

            const tableNumber =
                document.getElementById(
                    "tableNumber"
                );


            const table =
                tableNumber
                    ? tableNumber.value.trim()
                    : "";


            /* ===============================
               BUILD MESSAGE
            =============================== */

         let message =
    "● New Order\n\n";


            /* Table */

            if (table) {

                message +=
                    "Table: " +
                    table +
                    "\n";

            }


            /* Order Type */

            message +=
                "Order Type: " +
                orderType +
                "\n\n";

/* ===============================
   DELIVERY LOCATION
=============================== */

if (orderType === "Delivery") {

    if (customerLocation) {

        const mapLink =
            "https://www.google.com/maps?q=" +
            customerLocation.latitude +
            "," +
            customerLocation.longitude;

        message +=
            "Delivery Location:\n" +
            mapLink +
            "\n\n";

    } else {

        message +=
            "Delivery Location: Not available\n\n";

    }

}
            /* ===============================
               PRODUCTS
            =============================== */

            cartItems.forEach(
                function (item) {

                    message +=
                        item.quantity +
                        " x " +
                        item.name +
                        "\n";


                    /* Size */

                    if (item.size) {

                        message +=
                            "   - " +
                            item.size +
                            "\n";

                    }


                    /* Extras */

                    if (
                        item.extras &&
                        item.extras.length > 0
                    ) {

                        item.extras.forEach(
                            function (extra) {

                                message +=
                                    "   - " +
                                    extra.name +
                                    "\n";

                            }
                        );

                    }


                    message += "\n";

                }
            );


            /* ===============================
               TOTAL
            =============================== */

            const totalText =
                cartTotal
                    ? cartTotal.textContent
                    : "$0.00";


            message +=
                "Total: " +
                totalText +
                "\n\n";


          message +=
    "Thank you!";


            /* ===============================
               WHATSAPP NUMBER
            =============================== */

            const phoneNumber =
                "96171918022";


            /* ===============================
               CREATE WHATSAPP LINK
            =============================== */

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);


            /* ===============================
               OPEN WHATSAPP
            =============================== */

            window.location.href =
                whatsappURL;

        }
    );

}

/* =====================================================
   ORDER TYPE
===================================================== */

/* =====================================================
   ORDER TYPE + DELIVERY LOCATION
===================================================== */

let customerLocation = null;

document
    .querySelectorAll(".order-type-btn")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                /* إزالة Active من كل الأزرار */
                document
                    .querySelectorAll(".order-type-btn")
                    .forEach(function (item) {

                        item.classList.remove("active");

                    });


                /* تفعيل الزر الذي ضغط عليه الزبون */
                button.classList.add("active");


                /* معرفة نوع الطلب */
                const orderType =
                    button.getAttribute("data-order");


                /* إذا كان Delivery */
                if (orderType === "Delivery") {

                    getCustomerLocation();

                }

            }
        );

    });


/* =====================================================
   GET CUSTOMER LOCATION
===================================================== */

function getCustomerLocation() {

    /* التأكد أن المتصفح يدعم الموقع */
    if (!navigator.geolocation) {

        alert(
            "Location is not supported by this browser."
        );

        return;

    }


    /* طلب الموقع */
    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            /* حفظ الموقع */
            customerLocation = {

                latitude: latitude,
                longitude: longitude

            };


            console.log(
                "Customer location:",
                customerLocation
            );

        },


        function (error) {

            customerLocation = null;

            alert(
                "Please allow location access for Delivery."
            );

        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }

    );

}
/* =====================================================
   CLOSE
===================================================== */

closeProductDetails.addEventListener(
    "click",
    function () {

        productDetailsModal.classList.remove("open");

        document.body.classList.remove("modal-open");

    }
);

/* =====================================================
   OPENING HOURS
===================================================== */

const hoursBtn =
    document.getElementById("hoursBtn");

const hoursModal =
    document.getElementById("hoursModal");

const closeHours =
    document.getElementById("closeHours");


hoursBtn.addEventListener(
    "click",
    function () {

        hoursModal.classList.add("show");

    }
);


closeHours.addEventListener(
    "click",
    function () {

        hoursModal.classList.remove("show");

    }
);


/* إغلاق إذا ضغط خارج الصندوق */

hoursModal.addEventListener(
    "click",
    function (event) {

        if (event.target === hoursModal) {

            hoursModal.classList.remove("show");

        }

    }
);

if (hoursBtn) {

    hoursBtn.addEventListener(
        "click",
        function () {

            hoursModal.classList.add("open");

        }
    );

}


if (closeHours) {

    closeHours.addEventListener(
        "click",
        function () {

            hoursModal.classList.remove("open");

        }
    );

}


if (hoursModal) {

    hoursModal.addEventListener(
        "click",
        function (event) {

            if (event.target === hoursModal) {

                hoursModal.classList.remove("open");

            }

        }
    );

}
