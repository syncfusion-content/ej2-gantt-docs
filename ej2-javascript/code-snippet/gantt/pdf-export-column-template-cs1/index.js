var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            enableFooter: false
        };
        ganttChart.pdfExport(exportProperties);
   }
};
function pdfQueryCellInfo(args) {
    if (args.column.headerText === 'Resources') {
        {
            args.image = { height: 40, width: 40, base64: args.data.taskData.resourcesImage };
        }
    }
    if (args.column.headerText === 'Email ID') {
        args.hyperLink = {
            target: 'mailto:' + args.data.taskData.EmailId,
            displayText: args.data.taskData.EmailId
        };
    }
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    allowPdfExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'resources', headerText: 'Resources', width: '250', template: '#columnTemplate' },
        {field: 'EmailId', headerText: 'Email ID', template: '#template2', width: 180 },
    ],
    pdfQueryCellInfo: pdfQueryCellInfo,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    resources: editingResources,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('07/06/2019')
});
ganttChart.appendTo('#GanttExport');

