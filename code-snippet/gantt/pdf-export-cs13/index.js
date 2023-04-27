var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            ganttStyle: {
                fontFamily: 1,
                columnHeader: {
                    backgroundColor: new ej.pdfexport.PdfColor(179, 219, 255)
                },
                taskbar: {
                   taskColor: new ej.pdfexport.PdfColor(240, 128, 128),
                   taskBorderColor: new ej.pdfexport.PdfColor(240, 128, 128),
                   progressColor: new ej.pdfexport.PdfColor(205, 92, 92),
                },
                connectorLineColor: new ej.pdfexport.PdfColor(128,0,0),
                footer: {
                    backgroundColor: new ej.pdfexport.PdfColor(205, 92, 92)
                },
                timeline: {
                    backgroundColor: new ej.pdfexport.PdfColor(179, 219, 255),
                    fontStyle: 1
                },
                label: {
                    fontColor: new ej.pdfexport.PdfColor(128, 0, 0),
                },
                cell: {
                    backgroundColor: new ej.pdfexport.PdfColor(240, 248, 255),
                    fontColor: new ej.pdfexport.PdfColor(0, 0, 0),
                    borderColor:new ej.pdfexport.PdfColor(179, 219, 255),
                },  
            }    
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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');

