const express = require("express");
const routerReadProduit = express.Router();

routerReadProduit.get("/", (req, res) => {

    const executionReq = (requete, params) => {
        return new Promise((resolve, reject) => {
            req.getConnection((error, connection) => {
                if (error) {
                    reject(error);
                } else {
                    connection.query(requete, params, (error, results) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    });
                }
            });
        });
    };

    let resultatReq = null;

    executionReq("SELECT numProduit, design, prix, quantite, quantite*prix as montant FROM produits", [])
        .then((result) => {
            resultatReq = result;
            return executionReq("SELECT MIN(prix) as prixMin, MAX(prix) as prixMax, SUM(quantite*prix) as montantTotal FROM produits", []);
        })
        .then((resultTotal) => {
            res.status(200).json({ listeDonnee: resultatReq, donneeBasTab: resultTotal });
        })
        .catch((error) => {
            console.log("Erreur: " + error);
            res.status(500).json({ error: "Erreur lors de la récupération des données." });
        });
        
});

module.exports = routerReadProduit;