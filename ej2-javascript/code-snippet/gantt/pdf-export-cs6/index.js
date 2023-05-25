var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            includeHiddenColumn: true
        };
        ganttChart.pdfExport(exportProperties);
   }
};

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
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');

