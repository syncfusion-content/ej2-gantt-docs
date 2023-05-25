

import { Gantt, Toolbar, PdfExport, Selection,ExcelExport, PdfExportProperties,ExcelExportCompleteArgs,ExcelExportCompleteArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection,ExcelExport);
/**
 * Exporting Blob data
 */

let excelExpComplete: EmitType<ExcelExportCompleteArgs> = (args: ExcelExportCompleteArgs) => {
        //This event will be triggered when excel exporting.
            args.promise.then((e: { blobData: Blob }) => {
        //In this `then` function, we can get blob data through the arguments after promise resolved.
                exportBlob(e.blobData);
    });
};
let pdfExpComplete: EmitType<ExcelExportCompleteArgs> = (args: PdfExportCompleteArgs) => {
    //This event will be triggered when pdf exporting.
        args.promise.then((e: { blobData: Blob }) => {
        //In this `then` function, we can get blob data through the arguments after promise resolved.
        exportBlob(e.blobData);
    });
};


let exportBlob: Function = (blob: Blob) => {
    let a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let url: string = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport(null,null,null,true);
    }
       if (args.item.id === 'GanttExport_excelexport') {
        gantt.excelExport(null, null, null, true);
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
        { field: 'TaskName'},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    allowExcelExport: true,
       excelExportComplete: excelExpComplete,
        pdfExportComplete: pdfExpComplete,
        toolbar: ['PdfExport','ExcelExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');



