$('body').on('keydown', '.disable-enter input[type="text"], .disable-enter input[type="password"]', function(event) {
    if (event.keyCode == 13) {
        return false;
    }
});
// --
// change date format Y-m-d to Y/m/d

var formatDate = function(date) {
    return date.replace(/-/g, "/");
}
var timeSince = function(date, postPrix, options) {
    if (!postPrix) {
        postPrix = 'ago';
    }
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " years " + postPrix;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " months " + postPrix;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        if (options && options.incDay) {
            return (interval + parseInt(options.incDay)) + " days " + postPrix;
        } else {
            return (interval) + " days " + postPrix;
        }
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hours " + postPrix;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " min " + postPrix;
    }
    return "few second " + postPrix;
}

// --
// Valid Email

var validEmail = function(email) {
    return false;
}


//--
// --------------------------
// Company getProfilePercent method
// -------------------------

function getProfilePercent ($scope, $http, $routeParams, pageName) {

    // --
    $http.get('/api/get-company/' + $routeParams.id).success(function(profileData) {

        if (profileData.company == null) {
            $scope.profilePercentege = 0;
        } else {
            var count = 0;
            for (var cnt in profileData.company) {
                if (profileData.company[cnt] == null) {
                    count += 1;
                };
            }

            var totalD = 21;
            $scope.profilePercentege = 100 - parseInt((100 * count) / totalD);
        }
    });

    // --
    $http.get('/api/get-company/' + $routeParams.id + '/financial-information').success(function(financialData) {

        if (financialData.companyFinancialInformation == null) {
            $scope.financialPercentege = 0;
        } else {
            var count = 0;
            for (var cnt in financialData.companyFinancialInformation) {
                if (financialData.companyFinancialInformation[cnt] == '0') {
                    count += 1;
                };
            }

            var totalD = 6;
            $scope.financialPercentege = 100 - parseInt((100 * count) / totalD);
        }
    });

    // --
    $http.get('/api/get-company/' + $routeParams.id + '/business-summary').success(function(businessData) {

        if (businessData.companyBusinessSummary == null) {
            $scope.businessPercentege = 0;
        } else {
            var count = 0;
            for (var cnt in businessData.companyBusinessSummary) {
                if (businessData.companyBusinessSummary[cnt] == null) {
                    count += 1;
                };
            }

            var totalD = 9;
            $scope.businessPercentege = 100 - parseInt((100 * count) / totalD);
        }
    });

    // --
    $http.get('/api/get-company/' + $routeParams.id + '/documents').success(function(documentsData) {     

        if (documentsData.documents == null) {
            $scope.documentPercentege = 0;
        } else {
            var count = 0;
            var cateAr = [];

            for (var cnt in documentsData.documents) {
                cateAr[documentsData.documents[cnt].category_id] = documentsData.documents[cnt].category_id;
            }

            if(cateAr.length!=0) {
                for(var row in cateAr) {
                    if(cateAr[row]) {
                        count += 1;
                    }
                }
            }
            
            var totalD = 4;
            $scope.documentPercentege = parseInt((100 * count) / totalD);
        }
    });
}  