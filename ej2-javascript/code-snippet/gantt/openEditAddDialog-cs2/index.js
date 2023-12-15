
var excelExpComplete = function (args) {
    args.promise.then(function (e) {
        exportBlob(e.blobData);
    });
};

// Event handler for PDF export complete
var pdfExpComplete = function (args) {
    args.promise.then(function (e) {
        exportBlob(e.blobData);
    });
};

// Function to export Blob data
var exportBlob = function (blob) {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};
var clickHandler = function (args) {
    if (args.item.id === 'Gantt_pdfexport') {
        ganttChart.pdfExport(null, null, null, true);
    } else if (args.item.id === 'Gantt_excelexport') {
        ganttChart.excelExport(null, null, null, true);
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
    editSettings: {
        allowEditing: true,
        allowAdding: true
    },
    allowPdfExport: true,
    allowExcelExport: true,
    excelExportComplete: excelExpComplete,
    pdfExportComplete: pdfExpComplete,
    toolbar: ['PdfExport', 'ExcelExport'],
    toolbarClick: clickHandler
});
ganttChart.appendTo('#Gantt');