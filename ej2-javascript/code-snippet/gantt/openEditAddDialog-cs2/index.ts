


import { Gantt, Edit, Selection, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { EmitType } from '@syncfusion/ej2-base';
import {
    ExcelExportCompleteArgs,
    PdfExportCompleteArgs,
} from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Selection, Toolbar, PdfExport, ExcelExport);
let excelExpComplete: EmitType<ExcelExportCompleteArgs> = (
    args: ExcelExportCompleteArgs
) => {
    //This event will be triggered when excel exporting.
    args.promise.then((e: { blobData: Blob }) => {
        //In this `then` function, we can get blob data through the arguments after promise resolved.
        exportBlob(e.blobData);
    });
};
let pdfExpComplete: EmitType<PdfExportCompleteArgs> = (
    args: PdfExportCompleteArgs
) => {
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
};
let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'Gantt_pdfexport') {
        gantt.pdfExport(null, null, null, true);
    } else if (args.item.id === 'Gantt_excelexport') {
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
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    },
    excelExportComplete: excelExpComplete,
    pdfExportComplete: pdfExpComplete,
    allowPdfExport: true,
    allowExcelExport: true,
    toolbar: ['PdfExport', 'ExcelExport'],
    toolbarClick: clickHandler
});

gantt.appendTo('#Gantt');