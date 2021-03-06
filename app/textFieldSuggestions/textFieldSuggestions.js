/*
 * Copyright 2014 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

angular.module("textFieldSuggestions", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("textFieldSuggestions/textFieldSuggestions.html", require("./textFieldSuggestions.html"));
}]).directive("textFieldSuggestions", function () {

    return {
        restrict : "E",
        scope : {
            suggestions : "=",
            model : "="
        },
        templateUrl : "textFieldSuggestions/textFieldSuggestions.html",
        controllerAs : "ctrl",
        controller : ["$scope", function ($scope) {
                    var ctrl = this;
                    ctrl.open = false;
                    ctrl.scope = $scope;
                    this.clickSuggestion = function (event, suggestion) {
                        $scope.model = suggestion;
                        ctrl.open = false;
                        event.preventDefault();
                    };
                }]
    };
});
