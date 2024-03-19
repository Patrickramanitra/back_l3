const express = require("express");
const routerModifProduit = express.Router();

routerModifProduit.post("/modifProduits", (req, res)=>{
    let numProduit = req.body.numProduit;
    let design = req.body.design;
    let prix = req.body.prix;
    let quantite = req.body.quantite;

    req.getConnection((erreur, connection)=>{
        if(erreur){
            console.log(erreur);
        }else{
            connection.query("UPDATE `produit` SET `design` = ?, `prix` = ?, `quantite` = ? WHERE `produits`.`numProduit` = ?", [design, prix, quantite, numProduit], (erreur, resultat)=>{
                if(erreur){
                    console.log(erreur);
                }else{
                    res.status(200);
                    console.log(resultat);
                }
            });
        }
    });
});

module.exports = routerModifProduit;