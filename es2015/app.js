const lg = console.log;
let favoriteCityId = 'rome';
lg(favoriteCityId);
favoriteCityId = 'paris';
lg(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
lg(citiesId);
//citiesId = [];
//lg(citiesId);
citiesId.push("tokyo");
lg(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temp = 20;

    return { city, temp };
}

const weather = new getWeather(favoriteCityId);

lg(weather);

let {
    city: city,
    temp = temp
} = weather;

lg(city);
lg(temp);

let [parisId, nycId, ...othersCitiesId] = citiesId;
lg(parisId);
lg(nycId);
lg(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this._price;
    }

    toString() {
        return `${Trip.name} [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    getPrice() {
        return _price;
    }
    setPrice(price) {
        this._price = price;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip(parisId, "Paris", 'img/paris.jpg');
lg(parisTrip);
lg(parisTrip.name);

lg(parisTrip.toString());

parisTrip.setPrice(100);
lg(parisTrip.toString());

let defaultTrip = Trip.getDefaultTrip();
lg(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this._price = 0;
    }

    toString() {
        return `Free${super.toString()}`;
    }

}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
lg(freeTrip.toString());

class TripService {


    constructor() {
        // TODO Set of 3 trips
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));


    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone


                for (let element of this.trips) {
                    if (element.name === tripName) {
                        resolve(element);
                        return;
                    }
                };

                reject(`No trip with name ${tripName}`);
                // TODO utiliser resolve et reject en fonction du résultat de la recherche


            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.prices = new Map();

        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

                if (this.prices.has(tripId) == 1) {
                    resolve(`Price found : ` + this.prices.get(tripId));
                } else {
                    reject(`No trip with id ${tripId}`)
                }

            }, 2000)
        });
    }
}

const tripService = new TripService();
const priceService = new PriceService();
lg(tripService.findByName("Paris")
    .then(function (element) { lg(element) }, function (error) { lg(error) }));
lg(tripService.findByName("Toulouse")
    .then(function (element) { lg(element) }, function (error) { lg(error) }));
lg(tripService.findByName("Rio de Janeiro").then(function (element) { priceService.findPriceByTripId(element.id).then(function (price) { lg(price) }, function (error) { lg(error) }), function (error) { lg(error) } }));
lg(tripService.findByName("Nantes").then(function (element) { priceService.findPriceByTripId(element.id).then(function (price) { lg(price) }, function (error) { lg(error) }), function (error) { lg(error) } }));