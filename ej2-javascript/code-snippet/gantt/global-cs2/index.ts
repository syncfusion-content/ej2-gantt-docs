

import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import { caGregorian } from './ca-gregorian.json';
import { numbers } from './numbers.json';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

loadCldr(caGregorian, numbers);
setCulture('de-DE');
    
L10n.load({
  'de-DE': {
      'gantt': {
           "id": "Ich würde",
            "name": "Name",
            "startDate": "Anfangsdatum",
            "duration": "Dauer",
            "progress": "Fortschritt",
     }
  }
});
let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    locale: 'de-DE',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
});
gantt.appendTo('#Gantt');



