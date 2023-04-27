


import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { PdfPaddings } from '@syncfusion/ej2-gantt/src/export/pdf-base/pdf-borders';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
            ganttStyle: {
                fontFamily: 1,
                columnHeader: {
                    backgroundColor: new PdfColor(179, 219, 255)
                },
                taskbar: {
                    taskColor: new PdfColor(240, 128, 128),
                    taskBorderColor: new PdfColor(240, 128, 128),
                    progressColor: new PdfColor(205, 92, 92)
                },
                connectorLineColor: new PdfColor(128, 0, 0),
                footer: {
                    backgroundColor: new PdfColor(205, 92, 92)
                },
                timeline: {
                    backgroundColor: new PdfColor(179, 219, 255),
                    fontStyle: 1
                }
                label: {
                    fontColor: new PdfColor(128, 0, 0)
                },
                cell: {
                    backgroundColor: new PdfColor(240, 248, 255),
                    fontColor: new PdfColor(0, 0, 0),
                    borderColor: new PdfColor(179, 219, 255)
                },  
            }
        };
        gantt.pdfExport(exportProperties);
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
        dependency: 'Predecessor',
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
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');



