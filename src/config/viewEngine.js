import express from "express";

// đây là cái hàm đó mà không để tham số nè 
let configViewEngine = (app)=>{ // vì chỗ này cần tham số thì bên dưới mới dùng được app, nãy lỗi là "app is not defined là chưa định nghĩa app"
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views","./src/views")
}
module.exports = configViewEngine;