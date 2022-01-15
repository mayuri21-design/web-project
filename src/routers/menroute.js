const express=require('express');
const router=new express.Router();
const MensRanking=require("../model/mens");


//now need to handle post request
router.post("/mens", async (req, res) => {
    try {
      const addingMensRecord = new MensRanking(req.body);
      console.log(req.body);
      const insertMens = await addingMensRecord.save();
      return res.send(insertMens);
    } catch (err) {
      return res.send(err);
    }
  });
  //to get data
  router.get("/mens", async (req, res) => {
    try {
      const getMens = await MensRanking.find({}).sort({"ranking":1});
      return res.send(getMens);
    } catch (err) {
      return res.send(err);
    }
  });
  router.get("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getMen = await MensRanking.findById(_id );
      return res.send(getMen);
    } catch (err) {
      return res.send(err);
    }
  });
  
  //update
  router.patch("/mens/:id", async (req, res) => {
      try {
        const _id = req.params.id;
        const updateMens = await MensRanking.findByIdAndUpdate(_id,req.body);
        return res.send(updateMens);
      } catch (err) {
        return res.send(err);
      }
    });
  
    router.delete("/mens/:id", async (req, res) => {
      try {
        const deleteMens = await MensRanking.findByIdAndDelete(req.params.id);
        return res.send(deleteMens);
      } catch (err) {
        return res.send(err);
      }
    });


module.exports=router;