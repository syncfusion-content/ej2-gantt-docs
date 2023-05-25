var firstGantt = new ej.gantt.Gantt({
    dataSource: [GanttData[0]],
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
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    height:280,
    toolbar: ['ExcelExport']	
});
firstGantt.appendTo('#GanttExport1');

var secondGantt = new ej.gantt.Gantt({
    dataSource: [GanttData[1]],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    height:250,
    allowExcelExport: true
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = function(args) {
    if (args.item.id === 'GanttExport1_pdfexport') {
        var appendExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 }
        };

        var firstGanttExport= firstGantt.pdfExport({}, true);
        firstGanttPdfExport.then(function(pdfData){
              secondGantt.pdfExport({}, false, pdfData);
        });
    }
}

