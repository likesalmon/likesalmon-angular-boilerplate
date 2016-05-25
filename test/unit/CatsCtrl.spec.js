(function () {
    'use strict';

    describe('CatsCtrl', function () {
        beforeEach(module('ApexApp'));

        var $controller,
            $scope,
            CatsCtrl;

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
            $scope = {};
            
            CatsCtrl = $controller('CatsCtrl', { $scope: $scope });
        }));

        it('should exist', function () {
            expect(!!CatsCtrl).toBeTruthy();
        });
    });

}());
