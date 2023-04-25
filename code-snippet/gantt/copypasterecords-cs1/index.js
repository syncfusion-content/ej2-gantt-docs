ej.base.enableRipple(true);
var copiedRecord;
var enableFlag;
var gantt = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
        	name: 'TaskName',
        	startDate: 'StartDate',
        	dependency: 'Predecessor',
        	duration: 'Duration',
        	progress: 'Progress',
        	child: 'subtasks'
        },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true 
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    allowSelection: true,
    enableContextMenu: true,
    contextMenuItems: [
        { text: 'Copy', target: '.e-content', id: 'copy' },
        { text: 'Paste', target: '.e-content', id: 'paste' },
    ],
    contextMenuClick: function (args) {
        if (args.item.id === 'copy') {
            copiedRecord = args.rowData;
            copiedRecord.taskData.TaskID = gantt.currentViewData.length + 1;
        }
        if (args.item.id === 'paste') {
            gantt.addRecord(copiedRecord.taskData,'Below',args.rowData.index);
            if(copiedRecord.hasChildRecords) {
                addChildRecords(copiedRecord, args.rowData.index + 1);
            }
            copiedRecord = undefined;
        }
    },
    contextMenuOpen: function (args) {
        if (args.type !== 'Header') {
            if (copiedRecord) {
                args.hideItems.push('Copy');
            } else {
                args.hideItems.push('Paste');
             }
        }
    }
});

gantt.appendTo('#Gantt');

    function addChildRecords(record, index) {
      for(var i=0; i<record.childRecords.length; i++) {
            var childRecord = record.childRecords[i];
            childRecord.taskData.TaskID = ganttChart.currentViewData.length + 1;
            ganttChart.addRecord(childRecord.taskData,'Child',index);
            if(childRecord.hasChildRecords) {
                addChildRecords(childRecord, index + (i+1));
            }
      }
    }

