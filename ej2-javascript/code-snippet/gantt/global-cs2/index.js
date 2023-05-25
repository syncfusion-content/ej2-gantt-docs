ej.base.setCulture('de-DE');
loadCultureFiles();
ej.base.L10n.load({
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
var ganttChart = new ej.gantt.Gantt({
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
function loadCultureFiles() {
        var files = ['ca-gregorian.json', 'numbers.json'];
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            ajax = new ej.base.Ajax('./' + files[prop], 'GET', false);
            ajax.onSuccess = function (value) {
                val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture(prop);
        }
}
ganttChart.appendTo('#Gantt');

