var clickHandler = function(args){
    if (args.item.id === 'Gantt_pdfexport') {
         ganttChart.pdfExport();
    }
 };
 
 var ganttChart = new ej.gantt.Gantt({
     dataSource: GanttData,
     height: '450px',
     taskFields: {
         id: 'TaskID',
         name: 'TaskName',
         startDate: 'StartDate',
         endDate: 'EndDate',
         duration: 'Duration',
         progress: 'Progress',
         child: 'subtasks',
         manual: 'isManual',
         segments: "Segments",
         indicators: 'Indicators'
     },
     allowUnscheduledTasks:true,
     taskMode : 'Custom',
     allowPdfExport: true,
     toolbar: ['PdfExport'],
     toolbarClick: clickHandler,
     eventMarkers: [
         {
             day: '04/10/2019',
             cssClass: 'e-custom-event-marker',
             label: 'Project approval and kick-off' 
         }
     ],
     holidays: [{
         from: "04/04/2019",
         to:"04/05/2019",
         label: " Public holidays",
         cssClass:"e-custom-holiday"
         
     },
     {
         from: "04/12/2019",
         to:"04/12/2019",
         label: " Public holiday",
         cssClass:"e-custom-holiday"
         
     }],
 });
 ganttChart.appendTo('#GanttExport');
 
 
