


import { Gantt, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { EJ2Instance } from '@syncfusion/ej2-navigations';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let obj: any = (<EJ2Instance>document.getElementById('GanttExport')).ej2_instances[0]
        obj.treeGrid.columns[2].visible = false;
        gantt.pdfExport();
    }
};

let beforePdfExport: EmitType<Object> = (args: Object) => {
    let obj: any = (<EJ2Instance>document.getElementById('GanttExport')).ej2_instances[0]
    obj.treeGrid.columns[3].visible = true;
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
        dependency: 'Predecessor',
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
gantt.appendTo('#GanttExport');



