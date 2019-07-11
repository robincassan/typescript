"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this._nom = nom;
        this._prix = prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sej = [new Sejour('saint herblain', 500), new Sejour('ORVAULT', 50), new Sejour('Nantes', 100)];
    }
    SejourService.prototype.rechercheSejourParNom = function (nom) {
        var unSej = this._sej.filter(function (sej) {
            return sej.nom === nom;
        });
        if (unSej.length === 1)
            return unSej[0];
    };
    return SejourService;
}());
var nss = new SejourService();
console.log(nss.rechercheSejourParNom('Nantes'));
