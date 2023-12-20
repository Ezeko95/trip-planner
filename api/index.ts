//                      /\    .-" /
//                     /  ; .'  .'
//                    :   :/  .'
//                     \  ;-.'
//        .--""""--..__/     `.
//      .'           .'    `o  \
//     /                    `   ;
//    :                  \      :
//  .-;        -.         `.__.-'
// :  ;          \     ,   ;
// '._:           ;   :   (
//     \/  .__    ;    \   `-.
//      ;     "-,/_..--"`-..__)
//      '""--.._:

import app from "./src/app";
import sequelize from "./src/db";

const port = process.env.PORT || 3002;

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, function () {
      console.log("Wake up, Neo...");
    });
  })
  .catch((err) => console.error(err));
