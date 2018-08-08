var fs = require("fs");
var path = require("path");
var colors = require('colors');
var watch = require('watch');
/**
 * @param filePath router_Path
 */
var TerminalInspection = callback => {
  var filePath = path.resolve("./src/routes");
  var boxRouter = {
    routers: [],
    menus: []
  };
  var testLine = {
    models: [],
    filedirs: []
  };
  var locks = 0;
  var runs = 0;
  fileDisplay(filePath);

  function fileDisplay(filePath) {
    fs.readdir(filePath, function (err, files) {
      if (err) {
        console.warn(err);
      } else {
        locks = files.length
        if (files.length == 0) {}
        files.forEach(function (filename) {
          var filedir = path.join(filePath, filename);
          fs.stat(filedir, function (eror, stats) {
            if (eror) {
              console.warn("获取文件失败");
            } else {
              var isDir = stats.isDirectory();
              if (isDir) {
                runs++
                if (runs == locks) {
                  setTimeout(() => {
                    runs = 0
                    callback(boxRouter, testLine)
                  }, 1000);
                }
                if (
                  filedir
                  .split("routes\\")[1]
                  .replace(/\\/g, "/")
                  .split("/")[1]
                ) {
                  filedir
                    .split("routes\\")[1]
                    .replace(/\\/g, "/")
                    .split("/")
                    .map(row => {
                      for (let i = 0; i < boxRouter.routers.length; i++) {
                        if (boxRouter.routers[i].path == row) {
                          boxRouter.routers[i]["children"] = {
                            path: filedir
                              .split("routes\\")[1]
                              .replace(/\\/g, "/")
                          };
                        }
                      }
                    });
                } else {
                  boxRouter.routers.push({
                    path: filedir.split("routes\\")[1].replace(/\\/g, "/")
                  });
                }
                boxRouter.menus.push(
                  filedir.split("routes\\")[1].replace(/\\/g, "/")
                );

                testLine.filedirs.push(filedir);
                fileDisplay(filedir);
              } else {
                if (/model.js/g.test(filedir)) {
                  testLine.models.push(filedir.split("\\model.js")[0]);
                }
              }
            }
          });

        });
      }
    });
  }
};
watch.watchTree('./src/routes', function (f, curr, prev) {
  TerminalInspection(function (boxRouter, testLine) {
    var arr2 = testLine.models;
    var arr1 = testLine.filedirs;
    var temp = [];
    var temparray = [];
    for (var i = 0; i < arr2.length; i++) {
      temp[arr2[i]] = true;
    };
    for (var i = 0; i < arr1.length; i++) {
      if (!temp[arr1[i]]) {
        temparray.push(arr1[i]);
      };
    };
    if (temparray.length != 0) {
      temparray.forEach(element => {
        console.log(element.red + "：" + "此目录下缺少model模块路由/模块写入终止，请先增加model模块".yellow)
      })
      return
    } else {
      console.log('//路由目录级正确//'.green);
    }
    fs.writeFile(
      "./src/.rs.js",
      "export default " + JSON.stringify(boxRouter) + "",
      function (err) {
        if (err) console.log(err + "===========> 路由无法读取");
      }
    );
  })
});
