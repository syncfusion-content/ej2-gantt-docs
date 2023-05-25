var clickHandler = function(args){
    if (args.item.text === 'Test') {
        alert("Custom toolbar click...");
    }
};

ej.gantt.Gantt.Inject(ej.gantt.Filter,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 height:'450px',
	     taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
		toolbarClick: clickHandler,
		toolbar: ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Test',id: 'Test' }]
});
ganttChart.appendTo('#Gantt');


