const express = require("express");
const routerDeleteProduit = express.Router();

routerDeleteProduit.delete("/deleteProduits/:numproduit", (req, res)=>{
    let numProduit = req.params.numproduit;

    req.getConnection((erreur, connection)=>{
        if(erreur){
            console.log(erreur);
        }else{
            connection.query("DELETE FROM produits WHERE numProduit = ?", [numProduit], (erreur, resultat)=>{
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

module.exports = routerDeleteProduit;