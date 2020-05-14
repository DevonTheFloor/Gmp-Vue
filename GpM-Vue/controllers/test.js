

exports.gettest = (req,res,next)=>{
    console.log("Route GET Test!!");
    //console.log(err.stack);
    res.status(200).json({message: "coucou le test GET!"});
  }

  exports.posttest = (req,res,next)=>{
    console.log("RoutePOST Test");
    console.log("req.file =",req.file);
    console.log('reqbody =',req.body);
    console.log('oriname =',req.file.originalname);
    console.log('oriname =',req.file.filename);

    let object = req.file;
    //Object.watch(object);
    //console.log(err.stack);
    res.status(201).json({message: "coucou le test POST!"});
  }