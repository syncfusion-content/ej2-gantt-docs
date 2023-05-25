ej.gantt.Gantt.Inject(ej.gantt.Edit);

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
		 taskbarEditing: function (args) {
			if (args.data.TaskID == 4) // We can't edit Task Id 4
                args.cancel = true;
        },
        queryTaskbarInfo: function (args) { 
            if (args.data.TaskID == 6) { 
                args.taskbarElement.className += ' e-preventEdit' // Taskbar editing indicators are hidden
            } 
        },
		editSettings: {
           allowTaskbarEditing:true
         }
     });
ganttChart.appendTo('#Gantt');



