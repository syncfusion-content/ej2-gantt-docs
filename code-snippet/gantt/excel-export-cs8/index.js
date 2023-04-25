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
    toolbar: ['ExcelExport', 'CsvExport'],	
});
ganttChart.appendTo('#GanttExport');
ganttChart.toolbarClick = (args) => {
   if (args['item'].id === 'GanttExport_excelexport') {
        let excelExportProperties = {
            fileName:"Gantt.xlsx"
        };
        ganttChart.excelExport(excelExportProperties);
    }
	else if (args['item'].id === 'GanttExport_csvexport') {
        let excelExportProperties = {
            fileName:"Gantt.csv"
        };
        ganttChart.csvExport(excelExportProperties);
    }
}


