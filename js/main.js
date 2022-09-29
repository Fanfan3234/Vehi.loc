/* VARIABLE RECUPERATION GAMMES VEHICULES Allan*/

let moto = document.getElementById("moto");
let voiture = document.getElementById("voiture");
let camion = document.getElementById("camion");
let velo = document.getElementById("velo");

/* VARIABLE RECUPERATION FORMULAIRE VEHICULES Allan**/

let moto1 = document.getElementById("moto1");
let voiture1 = document.getElementById("voiture1");
let camion1 = document.getElementById("camion1");
let velo1 = document.getElementById("velo1");

// CHANGEMENT COULEUR GAMMES VEHICULES Allan*

moto.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-1.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
});

voiture.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-1.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
});
camion.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-1.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
});
velo.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle.svg";
});

// CHANGEMENT COULEUR  VEHICULES Allan*

moto1.addEventListener("click", () => {
  document.getElementById("voiture1").src = "images/icons/Car-2.svg";
  document.getElementById("camion1").src = "images/icons/Truck-2.svg";
  document.getElementById("moto1").src = "images/icons/Dirt Bike-1.svg";
  document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
});

voiture1.addEventListener("click", () => {
  document.getElementById("voiture1").src = "images/icons/Car-1.svg";
  document.getElementById("camion1").src = "images/icons/Truck-2.svg";
  document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
});
camion1.addEventListener("click", () => {
  document.getElementById("voiture1").src = "images/icons/Car-2.svg";
  document.getElementById("camion1").src = "images/icons/Truck-1.svg";
  document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
});
velo1.addEventListener("click", () => {
  document.getElementById("voiture1").src = "images/icons/Car-2.svg";
  document.getElementById("camion1").src = "images/icons/Truck-2.svg";
  document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo1").src = "images/icons/Bicycle.svg";
});

/*camions : Emmanuel et Marina*/

let trucktable = [
  {
    marque: "IVECO",
    modele: "S-Way",
    prix: 99,
  },
  {
    marque: "IVECO",
    modele: "Eurocargo",
    prix: 109,
  },
  {
    marque: "IVECO",
    modele: "Stralis X-Way",
    prix: 105,
  },
  {
    marque: "IVECO",
    modele: "Trakker",
    prix: 88,
  },
];

function loadtruck() {
  document.getElementById("vehicules").innerHTML = "";

  trucktable.map((truck) => {
    let marque = truck.marque;
    let modele = truck.modele;
    let prix = truck.prix;

    let structureTruck = `
    <div class="mx-4 clio-card">
    <a href="views/trucks/${modele}.html" id="propositions" title="fiche detaillée du vehicule" ><img src="images/vehicles/trucks/${modele}.png" width="200" alt="camion"></a>
        <p>
            <h4>${marque} ${modele}</h4>
            à partir de ${prix}€
        </p>
    </div>
`;
    document.getElementById("vehicules").innerHTML += structureTruck;
  });
}
document.getElementById("camion").addEventListener("click", (e) => {
  loadtruck();
});

/*motos : Dalian*/
let dirttable = [
  {
    marque: "Suzuki",
    modele: "hayabusa",
    prix: 250,
  },
  {
    marque: "Yamaha",
    modele: "MT-10",
    prix: 230,
  },
  {
    marque: "Kawaksi",
    modele: "Ninja",
    prix: 120,
  },
  {
    marque: "Kawaksi",
    modele: "gn",
    prix: 100,
  },
];

function loaddirt() {
  document.getElementById("vehicules").innerHTML = "";

  dirttable.map((dirt) => {
    let marque = dirt.marque;
    let modele = dirt.modele;
    let prix = dirt.prix;

    let structureDirt = `
    <div class="mx-4 clio-card">
    <a href="views/motos/${modele}.html" id="propositions" title="fiche detaillée du vehicule"><img src="images/vehicles/motorbikes/${modele}.png" width="200" alt="moto"></a>
        <p>
        <h4>${marque} ${modele}</h4>
            à partir de ${prix}€
        </p>
    </div>
`;
    document.getElementById("vehicules").innerHTML += structureDirt;
  });
}
document.getElementById("moto").addEventListener("click", (e) => {
  loaddirt();
});

/*vélos François*/

let velotable = [
  {
    marque: "Peugeot ",
    modele: "Lr01",
    prix: 50,
  },
  {
    marque: "Wayscral",
    modele: "Anyway e200",
    prix: 150,
  },
  {
    marque: "Cloot",
    modele: "Project level x rotor",
    prix: 25,
  },
  {
    marque: "Cipollini",
    modele: "Dolomia",
    prix: 250,
  },
];

function loadvelo() {
  document.getElementById("vehicules").innerHTML = "";

  velotable.map((velo) => {
    let marque = velo.marque;
    let modele = velo.modele;
    let prix = velo.prix;

    let structureVelo = `
      <div class="mx-4 clio-card">
      <a href="views/bicycles/${modele}.html" id="propositions" title="fiche detaillée du vehicule"><img src="images/vehicles/bicycles/${modele}.png" width="200" alt="vélo"></a>
          <p>
              <h4>${marque} ${modele}</h4>
              à partir de ${prix}€
          </p>
      </div>
  `;
    document.getElementById("vehicules").innerHTML += structureVelo;
  });
}
document.getElementById("velo").addEventListener("click", (e) => {
  loadvelo();
});

/*voitures : Yohann, Jérôme et Valentin. Ce code n'est pas opérationnel car la méthode est différente de celle utilisée dans le reste du document*/

let voituretable = [
  {
    marque: "fiat",
    modele: "500",
    prix: 70,
  },
  {
    marque: "mclaren",
    modele: "Senna",
    prix: 1670,
  },
  {
    marque: "subaru",
    modele: "Impreza wrx sti",
    prix: 150,
  },
  {
    marque: "mercedes",
    modele: "Classe c cabriolet",
    prix: 150,
  },
];

function loadvoiture() {
  document.getElementById("vehicules").innerHTML = "";

  voituretable.map((voiture) => {
    let marque = voiture.marque;
    let modele = voiture.modele;
    let prix = voiture.prix;

    let structureVoiture = `
      <div class="mx-4 clio-card">
        <a href="views/cars/${modele}.html" id="propositions" title="fiche detaillée du vehicule"><img src="images/vehicles/cars/${modele}.png" width="200" alt="voiture"></a>
          <p>
              <h4>${marque} ${modele}</h4>
              à partir de ${prix}€
          </p>
      </div>
  `;
    document.getElementById("vehicules").innerHTML += structureVoiture;
  });
}
document.getElementById("voiture").addEventListener("click", (e) => {
  loadvoiture();
});
