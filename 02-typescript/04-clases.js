//04-clases.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nameParameter, lastnameParameter) {
        this.fullname = " "; //Duck Typing -> String
        this.name = nameParameter;
        this.lastname = lastnameParameter;
        this.fullname = nameParameter + " " + lastnameParameter;
    }
    Persona.prototype.showData = function () {
        return this.fullname;
    };
    Persona.referential = "Human";
    return Persona;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(nameParameter, lastnameParameter, identificationCard, //Access modifier --> Class properties
    maritalStatus //Access modifier --> Class properties
    ) {
        var _this = _super.call(this, nameParameter, lastnameParameter) || this;
        _this.identificationCard = identificationCard;
        _this.maritalStatus = maritalStatus;
        return _this;
    }
    return User;
}(Persona));
var person = new User("Andres", "Llumiquinga", "1234567890", "Singer");
/*
person.name;
person.lastname;
person.identificationCard;
person.maritalStatus;
*/ 
