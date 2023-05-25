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
    gridLines:'Both',
    queryCellInfo: function(args){
		if (args.data['TaskID'] == 4 && args.column.field === 'TaskName') {
        	args.rowSpan = 2; 
    	}
	},
		
});
ganttChart.appendTo('#Gantt');















