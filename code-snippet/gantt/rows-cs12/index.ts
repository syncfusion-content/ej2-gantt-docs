


import { Gantt, RowDataBoundEventArgs, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

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
    rowDataBound: rowBound,
    queryTaskbarInfo: queryTaskbarInfo,
});
gantt.appendTo('#Gantt');

function rowBound(args: RowDataBoundEventArgs) {
  if (args.data['TaskID'] == 4) {
    args.row.style.background = 'cyan';
  }
}
function queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs) {
 if (args.data['TaskID'] == 4) {
   args.rowElement.style.background = 'cyan';
  }
}



