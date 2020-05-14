

exports.gettest = (err,req,res,next)=>{
    console.log("Route GET Test!!");
    console.log(err.stack);
    res.status(200).json({message: "coucou le test GET!"});
  }

  exports.posttest = (err,req,res,next)=>{
    console.log("RoutePOST Test");
    let object = req;
    console.log(Object.prototype.watch(object));
    console.log(err.stack);
    res.status(201).json({message: "coucou le test POST!"});
  }