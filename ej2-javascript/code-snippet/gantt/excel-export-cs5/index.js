var clickHandler = function(args){
	 if (args.item.id === 'GanttExport_excelexport') {        
        ganttChart.excelExport();
    }	
};
ej.gantt.Gantt.Inject(ej.gantt.ExcelExport,ej.gantt.Toolbar);

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
    treeColumnIndex: 1,
    allowExcelExport: true,	
    toolbar: ['ExcelExport'],
    labelSettings:{
        taskLabel: '${Progress}%'
    },
    splitterSettings: {
        columnIndex: 3
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100',visible:false  },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' }
    ],
    excelQueryCellInfo: function(args) {
        if(args.column.field == 'Progress'){
            if(args.value > 80) {
                args.style = { backColor: '#A569BD' };
            }
            else if(args.value < 20) {
                args.style = { backColor: '#F08080' };
            }            
        }
    },
    queryTaskbarInfo: function(args) {
        if (args.data.Progress > 80) {
            args.progressBarBgColor = "#6C3483";
            args.taskbarBgColor = args.taskbarBorderColor = "#A569BD";
        } else if (args.data.Progress < 20) {
            args.progressBarBgColor = "#CD5C5C";
            args.taskbarBgColor = args.taskbarBorderColor = "#F08080";
        }
    },
    queryCellInfo: function(args) {
        if(args.column.field == 'Progress'){
            if(args.data.Progress > 80) {
                args.cell.style.backgroundColor  = '#A569BD';
            }
            else if(args.data.Progress < 20) {
                args.cell.style.backgroundColor  = '#F08080';
            }            
        }
    },
	toolbarClick: clickHandler	
});
ganttChart.appendTo('#GanttExport');

