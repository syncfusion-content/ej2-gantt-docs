var clickHandler = function(args){
	if (args.item.id === 'toolbarfilter') {
        ganttChart.filterByColumn('TaskName', 'startswith', 'Identify');
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
		toolbar: [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right', prefixIcon: 'e-quickfilter'}],
		allowFiltering:true
});
ganttChart.appendTo('#Gantt');

