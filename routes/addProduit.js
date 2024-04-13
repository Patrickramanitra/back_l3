const express = require("express");
const routerAddProduit = express.Router();

routerAddProduit.post("/addProduits", (req, res) => {
  let numProduit = req.body.numProduit;
  let design = req.body.design;
  let prix = req.body.prix;
  let quantite = req.body.quantite;

  req.getConnection((erreur, connection) => {
    if (erreur) {
      console.log(erreur);
    } else {
      connection.query(
        "INSERT INTO produits (numProduit, design, prix, quantite) VALUES (?, ?, ?, ?)",
        [numProduit, design, prix, quantite],
        (erreur, resultat) => {
          if (erreur) {
            console.log(erreur);
          } else {
            res.status(200);
            console.log(resultat);
          }
        }
      );
    }
  });
});

module.exports = routerAddProduit;
