


import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

var clickHandler = function(args){
    let columns: Column[] = gantt.treeGrid.grid.columns;
    if (args.item.id === 'GanttExport_excelexport') {
        columns[0].visible = true;
        columns[3].visible = false;
        gantt.excelExport();
    }
    else if (args.item.id === 'GanttExport_csvexport') {
        columns[0].visible = true;
        columns[3].visible = false;
        gantt.csvExport();
    }
};
var exportComplete = function(args){
        let columns: Column[] = gantt.treeGrid.grid.columns;
        columns[0].visible = false;
        columns[3].visible = true;
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
    treeColumnIndex: 1,
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100',visible:false  },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    toolbar: ['ExcelExport','CsvExport'],
    toolbarClick: clickHandler,
    excelExportComplete: exportComplete
});
gantt.appendTo('#GanttExport');



