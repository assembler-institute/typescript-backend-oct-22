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
Object.defineProperty(exports, "__esModule", { value: true });
var _db = require('../Models');
function getBasePosts() {
    return __awaiter(this, void 0, void 0, function () {
        var userName, userNameToString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _db.User.find({}, { username: 1, _id: 0 }).lean()];
                case 1:
                    userName = _a.sent();
                    return [4 /*yield*/, userName.map(function (user) { return user.username; })];
                case 2:
                    userNameToString = _a.sent();
                    return [2 /*return*/, [
                            {
                                title: 'La historia interminable',
                                description: 'La Historia Interminable es una película de 1984 basada en la novela de Michael Ende. Cuenta la historia de Bastian, un niño solitario que se sumerge en un libro mágico y fantástico donde conoce a Atreyu, un joven guerrero que busca salvar el reino de Fantasía de la Nada. Juntos luchan contra el tiempo para encontrar la única manera de salvar a Fantasía: darle un nuevo nombre.',
                                image: 'https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg',
                                vote: 1552,
                                author: userNameToString[0]
                            },
                            {
                                title: 'La novia cadaver',
                                description: 'Esta película animada de 2005, también dirigida por Tim Burton, cuenta la historia de Victor, un joven que accidentalmente se compromete con una novia cadáver en el mundo de los muertos. Mientras intenta encontrar una manera de regresar al mundo de los vivos, se enamora de Emily, una novia cadáver más amable y comprensiva que su prometida original. Una película con una animación impresionante y una banda sonora encantadora.',
                                image: 'https://static.wikia.nocookie.net/doblaje/images/2/2b/El_cadaver_de_la_novia_poster8.jpg',
                                vote: 523,
                                author: userNameToString[1]
                            },
                            {
                                title: 'Big Fish',
                                description: 'Big Fish: La película de 2003 dirigida por Tim Burton sigue la vida de Edward Bloom, un hombre excéntrico y fabulador que cuenta historias increíbles sobre su vida. Su hijo, Will, trata de separar la realidad de la ficción mientras escucha las historias de su padre moribundo. Una película conmovedora y mágica sobre la relación entre un padre y un hijo.',
                                image: 'https://lamenteesmaravillosa.com/wp-content/uploads/2017/12/portada-pelicula-big-fish-768x576.jpg',
                                vote: 13520,
                                author: userNameToString[2]
                            },
                        ]];
            }
        });
    });
}
exports.default = getBasePosts;