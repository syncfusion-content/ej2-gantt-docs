var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 150, headerTemplate: '#customertemplate' },
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150},
        { field: 'Progress', headerText: 'Progress', width: 150 },
    ],
    enablePersistence: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
});
ganttChart.appendTo('#Gantt');

var savedProperties;
document.getElementById('restore').onclick = function () {
    savedProperties = JSON.parse(ganttChart.getPersistData());
    var gridColumnsState = Object.assign([], ganttChart.ganttColumns);
    savedProperties.columns.forEach(function (col) {
        var headerText = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['headerText'];
        var colTemplate = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['template'];
        var headerTemplate = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['headerTemplate'];
        col.headerText = 'Text Changed';
        col.template = colTemplate;
        col.headerTemplate = headerTemplate;
    });
    console.log(savedProperties);
    ganttChart.treeGrid.setProperties(savedProperties);
};


