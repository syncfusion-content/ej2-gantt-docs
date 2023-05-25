var elem;
var dropdownlistObj;
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
    editSettings: {
        allowEditing: true
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { 
            field: 'TaskName', headerText: 'Task Name',
            edit: {
                create: function() {
                    elem = document.createElement('input');
                    return elem;
                },
                read: function() {
                   return dropdownlistObj.value;
                },
                destroy: function() {
                    dropdownlistObj.destroy();
                },
                write: function(args) {
                    dropdownlistObj = new ej.dropdowns.DropDownList({
                        dataSource: ganttChart.treeGrid.grid.dataSource,
                        fields: { value: 'TaskName' },
                        value: args.rowData[args.column.field],
                        floatLabelType: 'Auto',
                    });
                    dropdownlistObj.appendTo(elem);
                }
            }
        },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' },
    ],
});
ganttChart.appendTo('#Gantt');













