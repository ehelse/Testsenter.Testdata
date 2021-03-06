"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngAfterViewInit = function () {
        $('#passordForm')
            .form({
            fields: {
                oldPassword: {
                    optional: !this.isNewUser,
                    rules: [
                        {
                            type: 'oldPassordCorrect',
                            prompt: 'Det gamle passordet du oppgav er ikke gyldig'
                        }
                    ]
                },
                newPassword: {
                    optional: !this.isNewUser,
                    rules: [
                        {
                            type: 'regExp',
                            value: '[A-Z]+',
                            prompt: 'Passord må inneholde minst én stor bokstav'
                        },
                        {
                            type: 'regExp',
                            value: '[a-z]+',
                            prompt: 'Passord må inneholde minst én liten bokstav'
                        },
                        {
                            type: 'regExp',
                            value: '[0-9]+',
                            prompt: 'Passord må inneholde minst ett tall'
                        },
                        {
                            type: 'minLength[8]',
                            prompt: 'Passord må være minst {ruleValue} tegn langt'
                        }
                    ]
                },
                newPasswordConfirmed: {
                    optional: !this.isNewUser,
                    rules: [
                        {
                            type: 'regExp',
                            value: '[A-Z]+',
                            prompt: 'Passord må inneholde minst én stor bokstav'
                        },
                        {
                            type: 'regExp',
                            value: '[a-z]+',
                            prompt: 'Passord må inneholde minst én liten bokstav'
                        },
                        {
                            type: 'regExp',
                            value: '[0-9]+',
                            prompt: 'Passord må inneholde minst ett tall'
                        },
                        {
                            type: 'minLength[8]',
                            prompt: 'Passord må være minst {ruleValue} tegn langt'
                        }
                    ]
                }
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ChangePasswordComponent.prototype, "isNewUser", void 0);
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'change-password',
            moduleId: module.id,
            templateUrl: 'change-password.component.html',
            styleUrls: ['../user.component.css']
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map