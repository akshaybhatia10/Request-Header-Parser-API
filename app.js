var express = require("express"),
    app     = express();
    
app.get("/",function(req,res){
    
    res.redirect("/whoami");
});

app.get("/whoami",function(req,res){
    var ipaddress = req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress;
    var language = req.headers["accept-language"].split(",")[0];
    var software = req.headers["user-agent"].match(/\((.*?)\)/)[1];
    
   res.json({"ipaddress":ipaddress,"language":language,"software":software}); 
   


});
    
app.listen(process.env.PORT, process.env.IP);