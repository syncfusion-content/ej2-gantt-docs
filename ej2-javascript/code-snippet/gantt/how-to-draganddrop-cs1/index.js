ej.gantt.Gantt.Inject(ej.gantt.Edit);
var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: editingResources, id: 'resourceId', text: 'resourceName' },
    allowDragAndDrop: true,
    height: "200px",
    nodeDragStop: function (args) {
        var chartEle = ej.base.closest(args.target, '.e-chart-row');
        var gridEle = ej.base.closest(args.target, '.e-row');
        if(gridEle) {
          var index = ganttChart.treeGrid.getRows().indexOf(gridEle);
          ganttChart.selectRow(index);
        }
        var record= args.draggedNodeData;
        var selectedData = ganttChart.flatData[ganttChart.selectedRowIndex];
        var selectedDataResource = selectedData.taskData.resources;
        var resources = [];
        if (selectedDataResource) {
            for (var i = 0; i < selectedDataResource.length; i++) {
              resources.push(selectedDataResource[i].resourceId);
            }
        }
        resources.push(parseInt(record.id));
        if (chartEle || gridEle) {
            var data = {
                TaskID: selectedData.taskData.TaskID,
                resources: resources
            };
            ganttChart.updateRecordByID(data);
            var elements = document.querySelectorAll('.e-drag-item');
            while (elements.length > 0 && elements[0].parentNode) {
                elements[0].parentNode.removeChild(elements[0]);
            }         
        }
    }
});
var ganttChart = new ej.gantt.Gantt({
        dataSource: editingData,
        resources: editingResources,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks',
            dependency: 'Predecessor',
            resourceInfo: 'resources'
        },
        editSettings: {
           allowEditing: true
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
		splitterSettings:{
		  position: "30%"
		},
        labelSettings: {
            rightLabel: 'resources'
        }
});
ganttChart.appendTo('#Gantt');
treeObj.appendTo('#TreeView');













