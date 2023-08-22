import { Gantt, Toolbar, Edit, Filter, RowDD} from '@syncfusion/ej2-gantt';
import { data } from 'datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
Gantt.Inject(Selection, Toolbar, Edit, Filter, RowDD);

let gantt: Gantt = new Gantt({
    dataSource: data,
    allowFiltering: true,
    treeColumnIndex: 1,
    height: '410px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks',
    },
    labelSettings:{
        leftLabel: 'taskName',
    },
    editSettings:{
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
    },
    toolbar: ['ExpandAll',
        'CollapseAll',
        'ZoomIn',
        'ZoomOut',
        'ZoomToFit',
        'CsvExport',
        'Search',],
    columns: [
        { field: 'TaskID', width: 60 },
        { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip', showCheckBox: true },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Progress' },
        { field: 'Predecessor' }
    ],
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('07/06/2019'),
    dataBound: dataBound
});
gantt.appendTo('#Gantt');
function dataBound() {
    gantt.treeGrid.autoCheckHierarchy = true;
};

let checkBtn: Button = new Button();
checkBtn.appendTo('#check');
document.getElementById('check').addEventListener('click', function () {
    gantt.treeGrid.selectCheckboxes([1,7]);
});

var uncheckBtn: Button = new Button();
uncheckBtn.appendTo('#uncheck');
document.getElementById('uncheck').addEventListener('click', function () {
    var count = gantt.treeGrid.getCheckedRowIndexes().length;
    for (var i = 0; i < count; i++) {
    gantt.treeGrid.getCheckedRowIndexes().map((x: any) => {
        gantt.treeGrid.selectCheckboxes([x]);
    });
}
});