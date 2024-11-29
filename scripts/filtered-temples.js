const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Temple data array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/825014ad7522e9baeadfafbee6ac86a4aecad6e0/full/1280%2C/0/default",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/6cf5534366ee359cb42d7e6eb0daede56939fca8/full/1280%2C/0/default",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://churchofjesuschrist.org/imgs/30a7cf5b72fdce1336cc9d0dc7dd087040c58f72/full/1280%2C/0/default",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://churchofjesuschrist.org/imgs/235f22f0764a01340190502b497b026502961cb0/full/1280%2C/0/default",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/360e1e0d39b054ef0a6aad0d21a5a03410c0f077/full/1280%2C/0/default",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/d3c50ef2bc653474951cc3666aa6518671a3ab45/full/1280%2C/0/default",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/2b324ee7a730547ecd232c096d4af401293e33be/full/1280%2C/0/default",
    },
    // Additional temple objects
    {
      templeName: "Salt Lake City Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/1280%2C/0/default",
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52745,
      imageUrl:
        "https://churchofjesuschrist.org/imgs/4f1313d912b16ff535921025812d2332ca0f8e99/full/1280%2C/0/default",
    },
    {
      templeName: "Manila Philippines",
      location: "Manila, Philippines",
      dedicated: "1984, September, 25",
      area: 26980,
      imageUrl:
        "https://churchofjesuschrist.org/imgs/de7a4293e088152271f9c6292ee37fbf83799741/full/1280%2C/0/default",
    },
];

// Display temple cards
function displayTemples(templesToDisplay) {
    const templeGallery = document.querySelector(".temple-gallery");
    templeGallery.innerHTML = ""; // Clear existing content

    templesToDisplay.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.className = "temple-card";

        templeCard.innerHTML = `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area} sq ft</p>
                </figcaption>
            </figure>
        `;

        templeGallery.appendChild(templeCard);
    });
}

// Filter temples
function filterTemples(filter) {
    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900);
    } else if (filter === "new") {
        filteredTemples = temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000);
    } else if (filter === "large") {
        filteredTemples = temples.filter((t) => t.area > 90000);
    } else if (filter === "small") {
        filteredTemples = temples.filter((t) => t.area < 10000);
    }

    displayTemples(filteredTemples);
}

// Event listeners for navigation
document.querySelectorAll(".filter").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute("data-filter");
        filterTemples(filter);
    });
});
  
  displayTemples(temples);
  
  // Click event listeners
  document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = link.textContent.toLowerCase();
  
      let filteredTemples = [];
      switch (filter) {
        case "old":
          filteredTemples = temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900);
          break;
        case "new":
          filteredTemples = temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000);
          break;
        case "large":
          filteredTemples = temples.filter((t) => t.area > 90000);
          break;
        case "small":
          filteredTemples = temples.filter((t) => t.area < 10000);
          break;
        case "home":
        default:
          filteredTemples = temples;
      }
  
      displayTemples(filteredTemples);
    });
});  

  