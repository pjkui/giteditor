console.log(__dirname);
console.log(__filename);
var Common = require('./api/common');

var Evt = require('./api/evt');
var app = require('electron').remote.app; // .require('app');
var basePath = app.getPath('appData') + '/leanote'; // /Users/life/Library/Application Support/Leanote'; // require('nw.gui').App.dataPath;
Evt.setDataBasePath(basePath);
var protocol = require('electron').protocol; // .require('protocol');
// 数据库初始化
var db = require('./api/db');
// db.init();
db.initGlobal();
// 所有service, 与数据库打交道
var Service = {
	notebookService: require('./api/notebook'),
	noteService: require('./api/note'),
	userService: require('./api/user'),
	tagService: require('./api/tag'),
	apiService: require('./api/api'),
	syncServie: require('./api/sync')
};
// 全局变量
var ApiService = Service.apiService;
var UserService = Service.userService;
var SyncService = Service.syncServie;
var NoteService = Service.noteService;
var NotebookService = Service.notebookService;
var TagService = Service.tagService;
var WebService = require('./api/web');
var FileService = require('./api/file');
var EvtService = require('./api/evt');
var CommonService = require('./api/common');

// NodeJs
var NodeFs = require('fs');

// 分发服务
// route = /note/notebook
// 过时
Service.dispatch = function() {};
var gui = require('./api/gui');
// var remote = require('remote');

var projectPath = __dirname;
