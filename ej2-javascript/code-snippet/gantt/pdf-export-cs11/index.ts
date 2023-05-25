


import { Gantt, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
    }
};

let pdfQueryTaskbarInfo: EmitType<Object> = (args: Object) => {
    if(args.data.Progress < 50 && !args.data.hasChildRecords) {
        args.taskbar.progressColor = new PdfColor(205, 92, 92);
        args.taskbar.taskColor =  args.taskbar.taskBorderColor = new PdfColor(240, 128, 128);
    }
};

let gantt: Gantt = new Gantt({
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
    toolbarClick: clickHandler,
    pdfQueryTaskbarInfo: pdfQueryTaskbarInfo
});
gantt.appendTo('#GanttExport');



