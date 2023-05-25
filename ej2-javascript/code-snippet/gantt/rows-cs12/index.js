
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
    rowDataBound: function(args){
        if (args.data['TaskID'] == 4) {
            args.row.style.background = 'cyan';
        }
    },
    queryTaskbarInfo: function(args){
        if (args.data['TaskID'] == 4) {
            args.rowElement.style.background = 'cyan';
        }
    }
});
ganttChart.appendTo('#Gantt');















