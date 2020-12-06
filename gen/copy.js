var fs = require("fs");
var path = require("path");

const SERVICES_PATH = "../services/";
const PROTO_PATH = "proto/";
const LIBS_PATH = "libs/";

function copyFileSync(source, target) {
  var targetFile = target;

  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  var files = [];

  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

function copyToServices(source) {
  for (const servicePath of fs.readdirSync(SERVICES_PATH)) {
    const fullServicePath = SERVICES_PATH + servicePath;
    if (fs.lstatSync(fullServicePath).isDirectory()) {
      copyFolderRecursiveSync(source, fullServicePath);
    }
  }
}

function copyProto() {
  copyFolderRecursiveSync(PROTO_PATH, "../api");
  copyToServices(PROTO_PATH);
}

function copyLibs() {
  copyFolderRecursiveSync(LIBS_PATH, "../api");
  copyToServices(LIBS_PATH);
}

copyProto();
copyLibs();
