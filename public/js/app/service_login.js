var app = require('electron').remote.app; // .require('app');

var Common = require('./api/common');
var Evt = require('./api/evt');
var basePath = app.getPath('appData') + '/leanote'; // /Users/life/Library/Application Support/Leanote'; // require('nw.gui').App.dataPath;
Evt.setDataBasePath(basePath);

// 所有service, 与数据库打交道
var Service = {
	userService: require('./api/user'),
	apiService: require('./api/api'),
};

var db = require('./api/db');
db.initGlobal();

// 全局变量
var ApiService = Service.apiService;
var UserService = Service.userService;
var EvtService = require('./api/evt');
var CommonService = Common;

var gui = require('./api/gui');