


import { Gantt, Toolbar,PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let firstGantt: Gantt = new Gantt({
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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    height: '280px',
});
firstGantt.appendTo('#GanttExport1');

let secondGantt: Gantt = new Gantt({
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
    toolbar: ['PdfExport'],
    height: '250px'
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = (args: Object) => {
    if (args.item.id === 'GanttExport1_pdfexport') {
        let firstGanttPdfExport: Promise<Object> = gantt.pdfExport({}, true);
        firstGanttPdfExport.then(function(pdfData){
            secondGantt.pdfExport({}, false, pdfData);
        });
    }
}



