var clickHandler = function (args) {
    if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            enableFooter: false
        };
        ganttChart.pdfExport(exportProperties);
    }
};
var pdfQueryTaskbarInfo =  function(args){
    if (!args.data.hasChildRecords) {
        if (args.data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20, base64: (args).data.taskData.resourcesImage, height: 20
            }]
        }
        args.taskbarTemplate.value = args.data.TaskName;
    }
    if (args.data.hasChildRecords) {
        if (args.data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20, base64: (args).data.taskData.resourcesImage, height: 20
            }]
        }
        args.taskbarTemplate.value = args.data.TaskName;
    }
    if (args.data.ganttProperties.duration === 0) {
        if (args.data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20, base64: (args).data.taskData.resourcesImage, height: 20,
            }]
        }
        args.taskbarTemplate.value = args.data.TaskName
    }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height: '450px',
    rowHeight: 55,
    taskbarHeight: 45,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        resourceInfo: 'resources',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    allowPdfExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
    ],
    pdfQueryTaskbarInfo: pdfQueryTaskbarInfo,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    milestoneTemplate: '#MilestoneTemplate',
    parentTaskbarTemplate: '#ParentTaskbarTemplate',
    taskbarTemplate: '#TaskbarTemplate',
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/30/2019'),
});
ganttChart.appendTo('#GanttExport');

