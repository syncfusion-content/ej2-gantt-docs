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
        { field: 'TaskName', headerText: 'Task Name', width: 150},
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150},
    ],
    enablePersistence: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    dataBound: dataBound
});
ganttChart.appendTo('#Gantt');

function dataBound(args) {
    var cloned = this.addOnPersist;
    this.addOnPersist = function (key) {
        key = key.filter(function (item) { return item !== "columns"; });
        return cloned.call(this, key);
    };
}

document.getElementById('add').onclick = function () {
    var obj = { field: "Progress", headerText: 'Progress', width: 100 };
    ganttChart.columns.push(obj);
    ganttChart.treeGrid.refreshColumns();
};

document.getElementById('remove').onclick = function () {
    ganttChart.columns.pop();
    ganttChart.treeGrid.refreshColumns();
};





