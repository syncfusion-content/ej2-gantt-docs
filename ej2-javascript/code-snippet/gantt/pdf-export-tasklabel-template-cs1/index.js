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
}
window.getResourceElements = function (value) {
    var out = "";
    var img = document.createElement('img');
    img.height = 20;
    var span = document.createElement('span');
    span.style.marginLeft = "5px";
    span.style.marginRight = "5px";
    for (var index = 0; index < value.length; index++) {
        img.src = 'https://ej2.syncfusion.com/demos/src/gantt/images/' + value[index].resourceName + '.png';
        span.innerHTML = value[index].resourceName;
        out = out + img.outerHTML + span.outerHTML;
    }
    return out;
};
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
    ],
    pdfQueryTaskbarInfo: pdfQueryTaskbarInfo,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    labelSettings: {
        leftLabel: '#leftLabel',
        rightLabel: '#rightLabel',
        taskLabel: '${Progress}%'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/30/2019'),
});
ganttChart.appendTo('#GanttExport');

