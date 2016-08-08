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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GlobalService_1 = require("../services/GlobalService");
var JobListComponent = (function () {
    function JobListComponent(globalService, router) {
        this.globalService = globalService;
        this.router = router;
    }
    JobListComponent.prototype.ngOnInit = function () {
        this.globalService.jobListEmitter.subscribe(function (value) {
            console.log(value);
        });
    };
    JobListComponent.prototype.backToHome = function () {
        this.router.navigate(['/']);
    };
    JobListComponent = __decorate([
        core_1.Component({
            selector: 'job-list',
            templateUrl: 'app/job-list/job-list.component.html',
            styleUrls: ['app/job-list/job-list.component.css']
        }), 
        __metadata('design:paramtypes', [GlobalService_1.GlobalService, router_1.Router])
    ], JobListComponent);
    return JobListComponent;
}());
exports.JobListComponent = JobListComponent;
//# sourceMappingURL=job-list.component.js.map