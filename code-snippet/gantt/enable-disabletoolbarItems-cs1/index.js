var clickHandler = function(args){
    if (args.item.text === 'QuickFilter') {
        ganttChart.filterByColumn('TaskName', 'startswith', 'Identify');
    }
    if (args.item.text === 'ClearFilter') {
        ganttChart.clearFiltering();
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
		toolbar: ['QuickFilter', 'ClearFilter'],
		allowFiltering:true
});
ganttChart.appendTo('#Gantt');

var enable = new ej.buttons.Button({}, '#enable');
var disable = new ej.buttons.Button({}, '#disable');

enable.element.onclick = function(){
    ganttChart.toolbarModule.enableItems([ganttChart.element.id + '_QuickFilter', ganttChart.element.id + '_ClearFilter'], true);// enable toolbar items.
};

disable.element.onclick = function(){
    ganttChart.toolbarModule.enableItems([ganttChart.element.id + '_QuickFilter', ganttChart.element.id + '_ClearFilter'], false);// disable toolbar items.
};







