var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
     ganttChart.pdfExport();
   }
};

var pdfQueryTaskbarInfo =  function(args){
   if(args.data.Progress < 50 && !args.data.hasChildRecords) {
        args.taskbar.progressColor = new ej.pdfexport.PdfColor(205, 92, 92);
        args.taskbar.taskColor =  args.taskbar.taskBorderColor = new ej.pdfexport.PdfColor(240, 128, 128);
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
        dependency: 'Predecessor',
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        child: 'subtasks',
        indicators: 'Indicators'
    },
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName'},
        { field: 'StartDate'},
        { field: 'Duration', visible: false},
        { field: 'Progress'}
    ],
    renderBaseline: true,
    baselineColor: 'red',
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryTaskbarInfo: pdfQueryTaskbarInfo
});
ganttChart.appendTo('#GanttExport');

