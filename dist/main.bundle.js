webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./TodoListModule/todo.list.module": [
		"../../../../../src/todo/TodoListModule/todo.list.module.ts",
		"todo.list.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_todo_module__ = __webpack_require__("../../../../../src/todo/todo.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__todo_todo_module__["a" /* TodoModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/todo/AuthModule/Login/Models/todo.login.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin(email, password) {
        this.email = email;
        this.password = password;
    }
    return UserLogin;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/Login/Services/todo.login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.LoginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        return this.http.post('/api/login', user, {
            headers: headers
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/Login/todo.login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" novalidate>\r\n        <fieldset>\r\n            <legend>Login</legend>\r\n            <p class=\"alert alert-danger\" *ngIf=\"!errors.valid && errors.message != null\">{{errors.message}}</p>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\" class=\"form-label\">Email:</label>\r\n                <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\"/>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && errors.controls.email.required\">*Email is required.</p>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && !errors.controls.email.required && errors.controls.email.email\">*Email is invalid.</p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\" class=\"form-label\">password:</label>\r\n                <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\"/>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && errors.controls.password.required\">*Password is required.</p>\r\n            </div>\r\n            <button class=\"btn btn-success\" type=\"submit\">Log In</button>  \r\n            <a class=\"btn btn-link\" routerLink=\"/landing/register\">Sign Up?</a>\r\n            <a class=\"btn btn-link\" routerLink=\"/home\">forgot password?</a>\r\n        </fieldset>\r\n    </form>\r\n</section>"

/***/ }),

/***/ "../../../../../src/todo/AuthModule/Login/todo.login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/todo/AuthModule/Login/todo.login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shared_Services_todo_utils_service__ = __webpack_require__("../../../../../src/todo/Shared/Services/todo.utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_todo_login_service__ = __webpack_require__("../../../../../src/todo/AuthModule/Login/Services/todo.login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_Services_todo_storage_service__ = __webpack_require__("../../../../../src/todo/Shared/Services/todo.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Models_todo_login_models__ = __webpack_require__("../../../../../src/todo/AuthModule/Login/Models/todo.login.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function LoginComponent(fb, utilService, loginService, router, session) {
        this.fb = fb;
        this.utilService = utilService;
        this.loginService = loginService;
        this.router = router;
        this.session = session;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            'email': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]],
            'password': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]]
        });
        this.errors = {
            valid: false,
            message: null,
            controls: {
                email: {
                    required: false,
                    email: false
                },
                password: {
                    required: false
                }
            }
        };
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.utilService.validate(this.errors, this.loginForm)) {
            var user = new __WEBPACK_IMPORTED_MODULE_7__Models_todo_login_models__["a" /* UserLogin */](this.loginForm.value.email, this.loginForm.value.password);
            this.loginService.LoginUser(user)
                .subscribe(function (response) {
                var payload = response.json();
                var headers = response.headers;
                if (payload.success) {
                    _this.session.store('token', headers.get('x-auth'), false);
                    _this.session.store('sync', payload.cloudsync, false);
                    _this.router.navigate(['home']);
                }
            }, function (error) {
                var payload = error.json();
                if (!payload.success) {
                    _this.errors.valid = false;
                    _this.errors.message = payload.err_msg;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'todo-login',
            template: __webpack_require__("../../../../../src/todo/AuthModule/Login/todo.login.component.html"),
            styles: [__webpack_require__("../../../../../src/todo/AuthModule/Login/todo.login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__Services_todo_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__Shared_Services_todo_utils_service__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_5__Services_todo_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_6__Shared_Services_todo_storage_service__["a" /* StorageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/Register/Models/todo.register.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegister; });
var UserRegister = (function () {
    function UserRegister(username, email, password, cloudsync) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.cloudsync = cloudsync;
    }
    return UserRegister;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/Register/Services/todo.register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.RegisterUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        return this.http.post('api/register', user, {
            headers: headers
        });
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/Register/todo.register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\" novalidate>\r\n        <fieldset>\r\n            <legend>Register</legend>\r\n            <p class=\"inline-input-error\" *ngIf=\"!errors.valid && errors.message != null\">{{errors.message}}</p>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\" class=\"form-label\">User Name:</label>\r\n                <input id=\"username\" class=\"form-control\" type=\"text\" formControlName=\"username\"/>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && errors.controls.username.required\">*Username is required.</p>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && !errors.controls.username.required && (errors.controls.username.minlength || errors.controls.username.maxlength)\">*Username should be between 5-16 characters.</p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\" class=\"form-label\">Email:</label>\r\n                <input id=\"email\" class=\"form-control\" type=\"email\" formControlName=\"email\"/>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && errors.controls.email.required\">*Email is required.</p>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && !errors.controls.email.required && errors.controls.email.email\">*Email is invalid.</p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\" class=\"form-label\">Password:</label>\r\n                <input id=\"password\" class=\"form-control\" type=\"password\" formControlName=\"password\" todoPasswordStrength/>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && errors.controls.password.required\">*Password is required.</p>\r\n                <p class=\"inline-input-error\" *ngIf=\"!errors.valid && !errors.controls.password.required && (errors.controls.password.minlength || errors.controls.password.maxlength)\">*Password should be between 8-16 characters.</p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"confirm\" class=\"form-label\">Confirm Password:</label>\r\n                <input id=\"confirm\" class=\"form-control\" type=\"password\" formControlName=\"confirm\"/>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                    <label for=\"cloudsync\"><input type=\"checkbox\" id=\"cloudsync\" formControlName=\"cloudsync\" />Cloud Sync</label>\r\n            </div>\r\n            <button class=\"btn btn-success\" type=\"submit\">Sign Up</button>\r\n            <a class=\"btn btn-link\" routerLink=\"/landing/login\">Login?</a>\r\n        </fieldset>\r\n    </form>\r\n</section>"

/***/ }),

/***/ "../../../../../src/todo/AuthModule/Register/todo.register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-touched.ng-invalid {\n  border: 1px solid #900000; }\n\n.inline-input-error {\n  margin-top: 5px;\n  color: #b30000; }\n\n.pass-strong {\n  border: 1px solid #51c142 !important;\n  box-shadow: inset 0 0px 35px rgba(83, 193, 66, 0.5) !important; }\n\n.pass-weak {\n  border: 1px solid #398efd !important;\n  box-shadow: inset 0 0px 35px rgba(57, 145, 253, 0.5) !important; }\n\n.pass-very-weak {\n  border: 1px solid #e8cf2c !important;\n  box-shadow: inset 0 0px 35px rgba(232, 207, 44, 0.5) !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/todo/AuthModule/Register/todo.register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_Services_todo_utils_service__ = __webpack_require__("../../../../../src/todo/Shared/Services/todo.utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_todo_register_service__ = __webpack_require__("../../../../../src/todo/AuthModule/Register/Services/todo.register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_todo_register_models__ = __webpack_require__("../../../../../src/todo/AuthModule/Register/Models/todo.register.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function RegisterComponent(fb, utilsService, registerService, router) {
        this.fb = fb;
        this.utilsService = utilsService;
        this.registerService = registerService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            'username': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(16)]],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]],
            'password': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(16)]],
            'confirm': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            'cloudsync': [false, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]]
        });
        this.errors = {
            valid: false,
            message: null,
            controls: {
                username: {
                    required: false,
                    minlength: false,
                    maxlength: false
                },
                email: {
                    required: false,
                    email: false
                },
                password: {
                    required: false,
                    minlength: false,
                    maxlength: false
                },
                confirm: {
                    required: false
                },
                cloudsync: {
                    required: false
                }
            }
        };
    };
    RegisterComponent.prototype.validate = function () {
        if (this.registerForm.value.password !== this.registerForm.value.confirm) {
            this.errors.valid = false;
            this.errors.message = 'Passwords do not match.';
        }
        return this.errors.valid;
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (this.utilsService.validate(this.errors, this.registerForm) && this.validate()) {
            // tslint:disable-next-line:max-line-length
            var user = new __WEBPACK_IMPORTED_MODULE_5__Models_todo_register_models__["a" /* UserRegister */](this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.cloudsync);
            this.registerService.RegisterUser(user)
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    _this.router.navigate(['landing/login']);
                }
            }, function (error) {
                var payload = error.json();
                if (!payload.success) {
                    _this.errors.valid = false;
                    _this.errors.message = payload.err_msg;
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'todo-register',
            template: __webpack_require__("../../../../../src/todo/AuthModule/Register/todo.register.component.html"),
            styles: [__webpack_require__("../../../../../src/todo/AuthModule/Register/todo.register.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__Services_todo_register_service__["a" /* RegisterService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__Shared_Services_todo_utils_service__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_4__Services_todo_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/todo.auth.home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-brand\">Todo</div>\r\n</nav>\r\n<section class=\"col\">\r\n    <router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "../../../../../src/todo/AuthModule/todo.auth.home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/todo/AuthModule/todo.auth.home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoAuthHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoAuthHomeComponent = (function () {
    function TodoAuthHomeComponent() {
    }
    TodoAuthHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'todo-auth-home',
            template: __webpack_require__("../../../../../src/todo/AuthModule/todo.auth.home.component.html"),
            styles: [__webpack_require__("../../../../../src/todo/AuthModule/todo.auth.home.component.scss")]
        })
    ], TodoAuthHomeComponent);
    return TodoAuthHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/todo.auth.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_todo_login_component__ = __webpack_require__("../../../../../src/todo/AuthModule/Login/todo.login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Register_todo_register_component__ = __webpack_require__("../../../../../src/todo/AuthModule/Register/todo.register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_auth_home_component__ = __webpack_require__("../../../../../src/todo/AuthModule/todo.auth.home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var router = [
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_4__todo_auth_home_component__["a" /* TodoAuthHomeComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__Login_todo_login_component__["a" /* LoginComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__Login_todo_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__Register_todo_register_component__["a" /* RegisterComponent */] }
        ] },
];
var AuthRouterModule = (function () {
    function AuthRouterModule() {
    }
    AuthRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(router)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AuthRouterModule);
    return AuthRouterModule;
}());



/***/ }),

/***/ "../../../../../src/todo/AuthModule/toto.auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_auth_router__ = __webpack_require__("../../../../../src/todo/AuthModule/todo.auth.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Login_todo_login_component__ = __webpack_require__("../../../../../src/todo/AuthModule/Login/todo.login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Register_todo_register_component__ = __webpack_require__("../../../../../src/todo/AuthModule/Register/todo.register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_auth_home_component__ = __webpack_require__("../../../../../src/todo/AuthModule/todo.auth.home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Shared_Derectives_todo_passwordsetrength_drirective__ = __webpack_require__("../../../../../src/todo/Shared/Derectives/todo.passwordsetrength.drirective.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__todo_auth_home_component__["a" /* TodoAuthHomeComponent */], __WEBPACK_IMPORTED_MODULE_5__Login_todo_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__Register_todo_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_8__Shared_Derectives_todo_passwordsetrength_drirective__["a" /* PasswordStrengthDirective */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__todo_auth_router__["a" /* AuthRouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__todo_auth_router__["a" /* AuthRouterModule */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/todo/Shared/Derectives/todo.passwordsetrength.drirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordStrengthDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordStrengthDirective = (function () {
    function PasswordStrengthDirective(render, eleRef, control) {
        this.render = render;
        this.eleRef = eleRef;
        this.control = control;
        this.strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
        this.mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    }
    PasswordStrengthDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.control.valueChanges.subscribe(function () {
            _this.validate();
        });
    };
    PasswordStrengthDirective.prototype.validate = function () {
        if (this.control.invalid) {
            this.render.removeClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-very-weak');
        }
        else if (this.control.valid && this.strongRegex.test(this.control.value)) {
            this.render.addClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-very-weak');
        }
        else if (this.control.valid && this.mediumRegex.test(this.control.value)) {
            this.render.addClass(this.eleRef.nativeElement, 'pass-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-very-weak');
        }
        else {
            this.render.addClass(this.eleRef.nativeElement, 'pass-very-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-weak');
        }
    };
    PasswordStrengthDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[todoPasswordStrength]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgControl */]])
    ], PasswordStrengthDirective);
    return PasswordStrengthDirective;
}());



/***/ }),

/***/ "../../../../../src/todo/Shared/Gaurds/todo.auth.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_todo_storage_service__ = __webpack_require__("../../../../../src/todo/Shared/Services/todo.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGaurd = (function () {
    function AuthGaurd(session, router) {
        this.session = session;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        if (!this.session.retrive('token', false)) {
            this.router.navigate(['/landing/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGaurd.prototype.canLoad = function (route) {
        if (!this.session.retrive('token', false)) {
            this.router.navigate(['/landing/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Services_todo_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "../../../../../src/todo/Shared/Services/todo.storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.store = function (key, value, onlySession) {
        if (typeof (Storage) !== 'undefined') {
            if (onlySession) {
                this.setSessionStorage(key, value);
            }
            else {
                this.setLocalStorage(key, value);
            }
        }
        else {
            // falback to cookies
            this.setValueCookie(key, value);
        }
    };
    StorageService.prototype.retrive = function (key, fromSession) {
        if (typeof (Storage) !== 'undefined') {
            if (fromSession) {
                return this.getSessionStorage(key);
            }
            else {
                return this.getLocalStorage(key);
            }
        }
        else {
            return this.getValueCookie(key);
        }
    };
    StorageService.prototype.delete = function (key, fromSession) {
        if (typeof (Storage) !== 'undefined') {
            if (fromSession) {
                this.removeSessionlStorage(key);
            }
            else {
                this.removeLocalStorage(key);
            }
        }
        else {
            this.removeValueCookie(key);
        }
    };
    StorageService.prototype.deleteAll = function () {
        if (typeof (Storage) !== 'undefined') {
            localStorage.clear();
            sessionStorage.clear();
        }
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name_1 = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name_1 + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };
    StorageService.prototype.setLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService.prototype.getLocalStorage = function (key) {
        return localStorage.getItem(key);
    };
    StorageService.prototype.removeLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    StorageService.prototype.setSessionStorage = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    StorageService.prototype.getSessionStorage = function (key) {
        return sessionStorage.getItem(key);
    };
    StorageService.prototype.removeSessionlStorage = function (key) {
        sessionStorage.removeItem(key);
    };
    StorageService.prototype.setValueCookie = function (key, value, day) {
        if (day === void 0) { day = 1; }
        var expireDate = new Date();
        expireDate.setSeconds((expireDate.getSeconds() + day * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';path=/;expires=' + expireDate.toUTCString();
    };
    StorageService.prototype.getValueCookie = function (key) {
        var nameEQ = key + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    };
    StorageService.prototype.removeValueCookie = function (key) {
        this.setValueCookie(key, '', -1);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/todo/Shared/Services/todo.utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.validate = function (errors, form) {
        errors.valid = true;
        errors.message = null;
        // tslint:disable-next-line:forin
        for (var control in errors.controls) {
            // tslint:disable-next-line:forin
            for (var err in errors.controls[control]) {
                try {
                    if (form.controls[control].errors[err]) {
                        errors.valid = false;
                    }
                    errors.controls[control][err] = form.controls[control].errors[err];
                }
                catch (e) {
                    errors.controls[control][err] = false;
                }
            }
        }
        return errors.valid;
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "../../../../../src/todo/TodoListModule/Store/todo.list.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESET_ALL_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR__TODO_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ResetAllTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ClearTodoStore; });
var ADD_TODO = 'ADD_TODO';
var RESET_ALL_TODOS = 'RESET_ALL_TODOS';
var CLEAR__TODO_STORE = 'CLEAR__TODO_STORE';
var AddTodo = (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    return AddTodo;
}());

var ResetAllTodos = (function () {
    function ResetAllTodos(payload) {
        this.payload = payload;
        this.type = RESET_ALL_TODOS;
    }
    return ResetAllTodos;
}());

var ClearTodoStore = (function () {
    function ClearTodoStore() {
        this.type = CLEAR__TODO_STORE;
    }
    return ClearTodoStore;
}());



/***/ }),

/***/ "../../../../../src/todo/TodoListModule/Store/todo.list.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TodoListReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Store_todo_list_actions__ = __webpack_require__("../../../../../src/todo/TodoListModule/Store/todo.list.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var init_state = {
    todos: []
};
function TodoListReducer(state, actions) {
    if (state === void 0) { state = init_state; }
    switch (actions.type) {
        case __WEBPACK_IMPORTED_MODULE_0__Store_todo_list_actions__["a" /* ADD_TODO */]:
            var copied_state1 = __assign({}, state, { todos: state.todos.concat([actions.payload]) });
            return copied_state1;
        case __WEBPACK_IMPORTED_MODULE_0__Store_todo_list_actions__["e" /* RESET_ALL_TODOS */]:
            var copied_state2 = __assign({}, state, { todos: actions.payload });
            return copied_state2;
        case __WEBPACK_IMPORTED_MODULE_0__Store_todo_list_actions__["c" /* CLEAR__TODO_STORE */]:
            var copied_state3 = init_state;
            return copied_state3;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/todo/todo.main.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/todo/todo.main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/todo/todo.main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoMainComponent = (function () {
    function TodoMainComponent() {
    }
    TodoMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'todo-main',
            template: __webpack_require__("../../../../../src/todo/todo.main.component.html"),
            styles: [__webpack_require__("../../../../../src/todo/todo.main.component.scss")]
        })
    ], TodoMainComponent);
    return TodoMainComponent;
}());



/***/ }),

/***/ "../../../../../src/todo/todo.main.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoMainRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shared_Gaurds_todo_auth_gaurd__ = __webpack_require__("../../../../../src/todo/Shared/Gaurds/todo.auth.gaurd.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var router = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'home', canActivate: [__WEBPACK_IMPORTED_MODULE_2__Shared_Gaurds_todo_auth_gaurd__["a" /* AuthGaurd */]], loadChildren: './TodoListModule/todo.list.module#TodoListModule' },
    { path: '**', redirectTo: '/landing' }
];
var TodoMainRouter = (function () {
    function TodoMainRouter() {
    }
    TodoMainRouter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(router)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], TodoMainRouter);
    return TodoMainRouter;
}());



/***/ }),

/***/ "../../../../../src/todo/todo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_main_component__ = __webpack_require__("../../../../../src/todo/todo.main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_main_router__ = __webpack_require__("../../../../../src/todo/todo.main.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AuthModule_toto_auth_module__ = __webpack_require__("../../../../../src/todo/AuthModule/toto.auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_Services_todo_utils_service__ = __webpack_require__("../../../../../src/todo/Shared/Services/todo.utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Shared_Services_todo_storage_service__ = __webpack_require__("../../../../../src/todo/Shared/Services/todo.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Shared_Gaurds_todo_auth_gaurd__ = __webpack_require__("../../../../../src/todo/Shared/Gaurds/todo.auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TodoListModule_Store_todo_list_reducers__ = __webpack_require__("../../../../../src/todo/TodoListModule/Store/todo.list.reducers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TodoModule = (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__todo_main_component__["a" /* TodoMainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__AuthModule_toto_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__todo_main_router__["a" /* TodoMainRouter */],
                __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* StoreModule */].forRoot('todoList', __WEBPACK_IMPORTED_MODULE_9__TodoListModule_Store_todo_list_reducers__["a" /* TodoListReducer */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__Shared_Services_todo_utils_service__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_7__Shared_Services_todo_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_8__Shared_Gaurds_todo_auth_gaurd__["a" /* AuthGaurd */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__todo_main_component__["a" /* TodoMainComponent */]]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map