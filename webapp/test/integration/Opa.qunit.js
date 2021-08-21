sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zdab/custom/common/variable/definition/manage/test/integration/pages/MainListReport' ,
        'zdab/custom/common/variable/definition/manage/test/integration/pages/MainObjectPage',
        'zdab/custom/common/variable/definition/manage/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zdab/custom/common/variable/definition/manage') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);