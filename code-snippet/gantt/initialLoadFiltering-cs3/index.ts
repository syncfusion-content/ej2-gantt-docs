


import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

Gantt.Inject(Filter);

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
            { field: 'TaskID' },
            { field: 'TaskName', filter: {
                ui: {
                    create: (args: { target: Element, column: Object }) => {
                        let db: Object = new DataManager(gantt.treeGrid.grid.dataSource);
                        let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                        args.target.appendChild(flValInput);
                        this.dropInstance = new DropDownList({
                            dataSource: new DataManager(gantt.treeGrid.grid.dataSource),
                            fields: { text: 'TaskName', value: 'TaskName' },
                            placeholder: 'Select a value',
                            popupHeight: '200px'
                        });
                        this.dropInstance.appendTo(flValInput);
                    },
                    write: (args: {
                        column: Object, target: Element, parent: any,
                        filteredValue: number | string
                    }) => {
                        this.dropInstance.value = args.filteredValue;
                    },
                    read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                        args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);
                    }
                }
                }
            },
            { field: 'StartDate' },
            { field: 'Duration' }
        ],
    allowFiltering: true
});

gantt.appendTo('#Gantt');



