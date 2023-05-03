var ganttChart = new ej.gantt.Gantt({
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
    toolbar: ['ZoomToFit'],
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019'),
    dataBound: function (args) {
      this.fitToProject();
    }
});
ganttChart.appendTo('#Gantt');

document.getElementById('changeData').addEventListener('click', function () {
  var obj = document.getElementById('Gantt').ej2_instances[0];
  obj.dataSource = data;
});









