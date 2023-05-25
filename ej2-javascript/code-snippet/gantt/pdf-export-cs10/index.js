var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
     ganttChart.pdfExport();
   }
};

var pdfQueryTimelineCellInfo = function(args){
   if(args.column.field == 'Progress'){
        args.timelineCell.backgroundColor = new ej.pdfexport.PdfColor(240, 248, 255);
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
        { field: 'TaskName'},
        { field: 'StartDate'},
        { field: 'Duration', visible: false},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryTimelineCellInfo: pdfQueryTimelineCellInfo
});
ganttChart.appendTo('#GanttExport');

