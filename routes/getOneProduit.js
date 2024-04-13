const express = require("express");
const routerGetOneProduit = express.Router();

routerGetOneProduit.get("/getOneProduit/:numproduit", (req, res) => {
  let numProduit = req.params.numproduit;
  console.log(numProduit);
  req.getConnection((erreur, connection) => {
    if (erreur) {
      console.log(erreur);
    } else {
      connection.query(
        "SELECT * FROM produits WHERE numProduit = ?",
        [numProduit],
        (erreur, resultat) => {
          if (erreur) {
            console.log(erreur);
          } else {
            res.status(200).json({ data: resultat });
          }
        }
      );
    }
  });
});

module.exports = routerGetOneProduit;
