ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort, ej.gantt.Resize);
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
        showColumnMenu: true,
        allowFiltering: true,
        allowResizing: true,
        allowSorting: true,
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
        columnMenuItems:[{text:'Clear Sorting', id:'ganttclearsorting'}],
        columnMenuClick: function(args){
            if(args.item.id === 'ganttclearsorting'){
                ganttChart.clearSorting();
            }
        },
        splitterSettings: {
            position: '75%'
        },
        sortSettings:{
            columns:[{direction: "Ascending", field: "TaskID"}]
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'Progress', headerText: 'Progress' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' }
        ],
});
ganttChart.appendTo('#Gantt');

