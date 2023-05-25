


import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

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
    treeColumnIndex: 1,
    allowExcelExport: true,
    toolbar: ['ExcelExport']
});
gantt.appendTo('#GanttExport');
gantt.toolbarClick = (args: Object) => {
    if (args['item'].id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            theme:
                {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
        };
        gantt.excelExport(excelExportProperties);
    }
}



