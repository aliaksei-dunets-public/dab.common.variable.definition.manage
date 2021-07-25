sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zdab.custom.common.variable.definition.manage',
            componentId: 'VariableDefinitionManageList',
            entitySet: 'VariableDefinitionManage'
        },
        AdditionalCustomListReportDefinition
    );
});