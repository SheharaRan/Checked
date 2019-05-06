var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

app.use('/', express.static("public"));
/*app.use('/static', express.static(path.join(sort, 'public')))*/


var task = [];

var complete = ["hi"];

var date = [];

var class1 = [];

var class2 = [];

var class3 = [];




app.post("/addtask", function (req, res) {
    console.log(req.body.category);

    if (req.body.category == 1) {

        var newTask = req.body.newtask;
        task.push(newTask);

        var newDate = req.body.newdate;
        date.push(newDate);
    } else if (req.body.category == 2) {
        var newTask = req.body.newtask;
        class1.push(newTask);

        var newDate = req.body.newdate;
        date.push(newDate);
    } else if (req.body.category == 3) {
        var newTask = req.body.newtask;
        class2.push(newTask);

        var newDate = req.body.newdate;
        date.push(newDate);
    } else if (req.body.category == 4) {
        var newTask = req.body.newtask;
        class3.push(newTask);

        var newDate = req.body.newdate;
        date.push(newDate);
    }


    res.redirect("/");
});





app.post("/removetask", function (req, res) {
    var completeTask = req.body.item;
 

    if (typeof completeTask == "string") {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask == "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }

    console.log(completeTask);

res.redirect("/");
});

app.post("/removetask1", function (req, res) {
    var completeTask = req.body.item;
 

    if (typeof completeTask == "string") {
        complete.push(completeTask);
        class1.splice(class1.indexOf(completeTask), 1);
    } else if (typeof completeTask == "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            class1.splice(class1.indexOf(completeTask[i]), 1);
        }
    }

    console.log(completeTask);

res.redirect("/");
});

app.post("/removetask2", function (req, res) {
    var completeTask = req.body.item;
 

    if (typeof completeTask == "string") {
        complete.push(completeTask);
        class2.splice(class2.indexOf(completeTask), 1);
    } else if (typeof completeTask == "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            class2.splice(class2.indexOf(completeTask[i]), 1);
        }
    }

    console.log(completeTask);

res.redirect("/");
});

app.post("/removetask3", function (req, res) {
    var completeTask = req.body.item;
 

    if (typeof completeTask == "string") {
        complete.push(completeTask);
        class3.splice(class3.indexOf(completeTask), 1);
    } else if (typeof completeTask == "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            class3.splice(class3.indexOf(completeTask[i]), 1);
        }
    }

    console.log(completeTask);

res.redirect("/");
});

//app.post("/removetask1", function (req, res) {
//    var completeTask = req.body.check;
//    
//    
//
//    console.log(completeTask)
//
//    if (typeof completeTask == "string") {
//        complete.push(completeTask);
//        class1.splice(class1.indexOf(completeTask), 1);
//    } else if (typeof completeTask == "object") {
//        for (var i = 0; i < completeTask.length; i++) {
//            complete.push(completeTask[i]);
//            class1.splice(class1.indexOf(completeTask[i]), 1);
//        }
//    }
//
//
//    res.redirect("/");
//});




//app.post("/added", function (req, res) {
//    var completeTask = req.body.item;
//
//
//
//    console.log(completeTask)
//
//    if (typeof completeTask == "string") {
//        class1.push(completeTask);
//        task.splice(task.indexOf(completeTask), 1);
//    } else if (typeof completeTask == "object") {
//        for (var i = 0; i < completeTask.length; i++) {
//            class1.push(completeTask[i]);
//            task.splice(task.indexOf(completeTask[i]), 1);
//        }
//
//    }
//
//    res.redirect("/");
//});
//
//app.post("/class1", function (req, res) {
//    var completeTask = req.body.item;
//
//    console.log(completeTask)
//
//    if (typeof completeTask == "string") {
//        class1.push(completeTask);
//        task.splice(task.indexOf(completeTask), 1);
//    } else if (typeof completeTask == "object") {
//        for (var i = 0; i < completeTask.length; i++) {
//            class1.push(completeTask[i]);
//            task.splice(task.indexOf(completeTask[i]), 1);
//        }
//    }
//
//    res.redirect("/");
//});
//
//app.post("/class2", function (req, res) {
//    var completeTask = req.body.item;
//
//    console.log(completeTask)
//
//    if (typeof completeTask == "string") {
//        class2.push(completeTask);
//        task.splice(task.indexOf(completeTask), 1);
//    } else if (typeof completeTask == "object") {
//        for (var i = 0; i < completeTask.length; i++) {
//            class2.push(completeTask[i]);
//            task.splice(task.indexOf(completeTask[i]), 1);
//        }
//    }
//
//    res.redirect("/");
//});
//
//app.post("/class3", function (req, res) {
//    var completeTask = req.body.item;
//
//    console.log(completeTask)
//
//    if (typeof completeTask == "string") {
//        class3.push(completeTask);
//        task.splice(task.indexOf(completeTask), 1);
//    } else if (typeof completeTask == "object") {
//        for (var i = 0; i < completeTask.length; i++) {
//            class3.push(completeTask[i]);
//            task.splice(task.indexOf(completeTask[i]), 1);
//        }
//    }
//
//    res.redirect("/");
//});

app.get("/", function (req, res) {
    res.render("app", {
        task: task,
        date: date,
        class1: class1,
        class2: class2,
        class3: class3,
        complete: complete,
    });

});



app.listen(3000, function () {
    console.log("server is running on port 3000");
});
