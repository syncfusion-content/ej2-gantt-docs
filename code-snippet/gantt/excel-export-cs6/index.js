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
});
ganttChart.appendTo('#GanttExport');
ganttChart.toolbarClick = (args) => {
    if (args['item'].id === 'GanttExport_excelexport') {
        let excelExportProperties = {
            theme:
                {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' },
                    caption: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
        };
        ganttChart.excelExport(excelExportProperties);
    }	
}

