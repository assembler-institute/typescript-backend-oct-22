"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User = require("../Models/User").User;
var http_errors_1 = __importDefault(require("http-errors"));
var UserValidation_1 = require("../Validations/UserValidation");
var processUpdateUser = function (userId, userModelValidation) { return __awaiter(void 0, void 0, void 0, function () {
    var updateUser_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.updateOne({
                        _id: userId,
                    }, {
                        $set: {
                            name: userModelValidation.name,
                            surname: userModelValidation.surname,
                        },
                    })];
            case 1:
                updateUser_1 = _a.sent();
                return [2 /*return*/, updateUser_1];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var addUser = function (userModelValidation) { return __awaiter(void 0, void 0, void 0, function () {
    var user, savedUser, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = new User({
                    username: userModelValidation.username,
                    name: userModelValidation.name,
                    surname: userModelValidation.surname,
                });
                console.log(user);
                return [4 /*yield*/, user.save()];
            case 1:
                savedUser = _a.sent();
                return [2 /*return*/, savedUser];
            case 2:
                error_2 = _a.sent();
                throw new http_errors_1.default.BadRequest("Bad request.");
            case 3: return [2 /*return*/];
        }
    });
}); };
var createUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userModelValidation, isUsernameAvailable, newUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('entro');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, UserValidation_1.UserValidation.validateAsync(req.body)];
            case 2:
                userModelValidation = _a.sent();
                console.log(userModelValidation);
                if (!userModelValidation) {
                    return [2 /*return*/, "Operation failed, invalid details provided."];
                }
                return [4 /*yield*/, User.findOne({
                        username: userModelValidation.username,
                    })];
            case 3:
                isUsernameAvailable = _a.sent();
                if (isUsernameAvailable) {
                    return [2 /*return*/, res.status(404).json({
                            message: "Username ".concat(userModelValidation.username, " not available"),
                        })];
                }
                return [4 /*yield*/, addUser(userModelValidation)];
            case 4:
                newUser = _a.sent();
                if (newUser) {
                    return [2 /*return*/, res.status(201).json({
                            message: "User created successfully",
                            data: newUser,
                        })];
                }
                return [2 /*return*/, next(res.status(400).json({
                        message: "Invalid details provided.",
                    }))];
            case 5:
                error_3 = _a.sent();
                if (error_3 instanceof Error) {
                    return [2 /*return*/, next(res.status(400).json({
                            message: "Invalid details provided.",
                        }))];
                }
                next(error_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var getUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userIdValidation, userDetails, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, UserValidation_1.UserIdValidation.validateAsync(req.params.userId)];
            case 1:
                userIdValidation = _a.sent();
                if (!userIdValidation) {
                    res.status(400).json({
                        message: "Operation failed, invalid details provided.",
                    });
                }
                return [4 /*yield*/, User.findById(userIdValidation)];
            case 2:
                userDetails = _a.sent();
                console.log(userDetails);
                if (!userDetails) {
                    res.status(404).json({
                        message: "User id not available",
                    });
                }
                return [2 /*return*/, res.status(200).json({
                        message: "User details",
                        data: userDetails,
                    })];
            case 3:
                error_4 = _a.sent();
                if (error_4 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Invalid details provided.",
                        })];
                }
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userModelValidation, isUsernameValid, updatedUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, UserValidation_1.UserValidation.validateAsync(req.body)];
            case 1:
                userModelValidation = _a.sent();
                if (!userModelValidation) {
                    return [2 /*return*/, next(new http_errors_1.default.BadRequest("Operation failed, invalid details provided."))];
                }
                return [4 /*yield*/, User.findOne({
                        username: userModelValidation.username,
                    })];
            case 2:
                isUsernameValid = _a.sent();
                if (!isUsernameValid) {
                    return [2 /*return*/, res.status(404).json({
                            message: "Username ".concat(userModelValidation.username, " not valid"),
                        })];
                }
                return [4 /*yield*/, processUpdateUser(isUsernameValid._id, userModelValidation)];
            case 3:
                updatedUser = _a.sent();
                if (updatedUser) {
                    return [2 /*return*/, res.status(201).json({
                            updatedUser: updatedUser,
                        })];
                }
                return [2 /*return*/, next(res.status(400).json({
                        message: "Invalid details provided.",
                    }))];
            case 4:
                error_5 = _a.sent();
                if (error_5 instanceof Error) {
                    return [2 /*return*/, next(res.status(400).json({
                            message: "Invalid details provided.",
                        }))];
                }
                next(error_5);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    getUser: getUser,
};
