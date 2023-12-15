ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar,ej.gantt.Selection,ej.gantt.Filter,ej.gantt.RowDD);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    allowFiltering: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true,
        },
        labelSettings: {
            leftLabel: 'TaskName',
        },
        columns: [
            { field: 'TaskID', width: 60 },
            { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip', showCheckbox: true },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor' }
        ],
        toolbar: ['ExpandAll',
        'CollapseAll',
        'ZoomIn',
        'ZoomOut',
        'ZoomToFit',
        'CsvExport',
        'Search',],
        treeColumnIndex: 1,
        height: '410px',
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('07/06/2019'),
        dataBound: dataBound
});
ganttChart.appendTo('#Gantt');
function dataBound() {
    ganttChart.treeGrid.autoCheckHierarchy = true;
};

var checkBtn = new ej.buttons.Button();
checkBtn.appendTo('#check');
document.getElementById('check').addEventListener('click', function () {
    ganttChart.treeGrid.selectCheckboxes([1,7]);
});

var uncheckBtn = new ej.buttons.Button();
uncheckBtn.appendTo('#uncheck');
document.getElementById('uncheck').addEventListener('click', function () {
    var count = ganttChart.treeGrid.getCheckedRowIndexes().length;
    for (var i = 0; i < count; i++) {
        ganttChart.treeGrid.getCheckedRowIndexes().map((x) => {
        ganttChart.treeGrid.selectCheckboxes([x]);
    });
}
});