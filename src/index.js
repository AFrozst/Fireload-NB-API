"use strict";
const application = require("./app");
application.listen(application.get("port"), () => {
  console.log(`Server started on port ${application.get("port")}`);
});
