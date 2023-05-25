var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
       var obj = document.getElementById('GanttExport').ej2_instances[0];
       obj.treeGrid.columns[2].visible = false;
       ganttChart.pdfExport();
   }
};

var beforePdfExport = function(args){
    var obj = document.getElementById('GanttExport').ej2_instances[0];
    obj.treeGrid.columns[3].visible = true;
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
    beforePdfExport: beforePdfExport
});
ganttChart.appendTo('#GanttExport');

