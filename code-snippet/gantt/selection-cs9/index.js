ej.gantt.Gantt.Inject(ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    rowSelected: rowSelected
    });
ganttChart.appendTo('#Gantt');

function rowSelected(args) {
    var selectedrowindex = ganttChart.selectionModule.getSelectedRowIndexes();  // get the selected row indexes.
    alert(selectedrowindex); // to alert the selected row indexes.
    var selectedrecords = ganttChart.selectionModule.getSelectedRecords();  // get the selected records.
    console.log(selectedrecords); // to print the selected records in console window.
}

