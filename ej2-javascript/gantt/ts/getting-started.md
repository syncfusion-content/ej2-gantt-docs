---
layout: post
title: Getting started with ##Platform_Name## Gantt control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Gantt control

This section explains the steps to create a simple Gantt and demonstrates the basic usage of the gantt component using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Following is the list of minimum dependencies required to use the gantt:

```javascript
|-- @syncfusion/ej2-gantt
    |-- @syncfusion/ej2-treegrid
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-grids
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2/material.css';

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Adding Gantt component

You can start adding Essential JS 2 Gantt component to the application. To get started, add the Gantt component in `app.ts` and `index.html` files using the following code.

Place the following gantt code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Gantt } from '@syncfusion/ej2-gantt';

let gantt: Gantt = new Gantt({
    dataSource: [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3, 5]  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4] },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4, 8], },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0,Predecessor:"6SS", Progress: 50, resources: [12, 5] }
            ]
        },
    ],
    height: '450px',
    taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
        }
    });

 gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

Now, add an HTML div element to act as the gantt element in `index.html` using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--Element which will render as Gantt-->
    <div id="Gantt"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Binding Gantt with data

Bind data with the Gantt control by using the [`dataSource`](https://ej2.syncfusion.com/documentation/api/gantt/#datasource) property. It accepts an array of JavaScript object or the DataManager instance.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Gantt</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript Gantt Controls" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
      <div id='loader'>Loading....</div>
      <div id='container'>
        <div id='Gantt'></div>
      </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Place the following code in the `app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let data: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4 , Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        },
    ];

    let gantt: Gantt = new Gantt({
         dataSource: data,
     });

gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt control using the [`taskFields`](https://ej2.syncfusion.com/documentation/api/gantt/#taskfields) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Gantt} from '@syncfusion/ej2-gantt';

let gantt: Gantt = new Gantt({
         dataSource: data,
         height:'450px',
         taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            progress: 'Progress',
            child: 'subtasks',
        },
  });

gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

## Defining columns

Gantt has an option to define columns as an array. You can customize the Gantt columns using the following properties:

* `field`: Maps the data source fields to the columns.
* `headerText`: Changes the title of columns.
* `textAlign`: Changes the alignment of columns. By default, columns will be left aligned. To change the columns to right align, set `textAlign` to right.
* `format`: Formats the number and date values to standard or custom formats. Here, it is defined for the conversion of numeric values to currency.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Gantt } from '@syncfusion/ej2-gantt';
import { data } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: '250' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '250' },
            { field: 'Duration', headerText: 'Duration', width: '250' },
            { field: 'Progress', headerText: 'Progress', width: '250', format: 'C' },
        ],
});
gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

## Module injection

To create a Gantt with additional features, inject the required modules. The following modules are used to extend the Gantt's basic functionality:

* [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule): Inject this module to use the editing feature.
* [`Filter`](https://ej2.syncfusion.com/documentation/api/gantt/#filtermodule): Inject this module to use the filtering feature.
* [`Sort`](https://ej2.syncfusion.com/documentation/api/gantt/#sortmodule): Inject this module to use the sorting feature.

These modules should be injected into the Gantt using the `Gantt.Inject` method.

## Enable editing

The editing feature enables you to edit the tasks in the Gantt control. It can be enabled by using the [`editSettings.allowEditing`](https://ej2.syncfusion.com/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/documentation/api/gantt/editSettings/#allowtaskbarediting) properties.

The following editing options are available to update the tasks in Gantt:

* Cell
* Dialog
* Taskbar
* Connector line

### Cell editing

Modify the task details through cell editing by setting the edit [`mode`](https://ej2.syncfusion.com/documentation/api/gantt/editSettings/#mode) to `Auto`. Inject the [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the cell when a grid cell is clicked.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs15" %}

`Note:` When the edit mode is set to `Auto`, you can change the cells to editable mode by double-clicking anywhere at the TreeGrid and edit the task details in the edit dialog by double-clicking anywhere at the chart.

### Dialog editing

Modify the task details through dialog by setting the edit [`mode`](https://ej2.syncfusion.com/documentation/api/gantt/editSettings/#mode) to `Dialog`. Inject the [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the task details through the edit dialog.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs16" %}

`Note:` In dialog editing mode, the edit dialog will appear while performing double-click action in both TreeGrid and chart sides.

### Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/documentation/api/gantt/editSettings/#allowtaskbarediting) property. Inject the [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the task details while dragging the taskbar.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs17" %}

### Dependency editing

Modify the task dependencies using mouse interactions by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/documentation/api/gantt/editSettings/#allowtaskbarediting)  property along with mapping the task dependency data source field to the [`dependency`](https://ej2.syncfusion.com/documentation/api/gantt/taskFields/#dependency) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs18" %}

## Enable filtering

The filtering feature enables you to view the reduced amount of records based on filter criteria. Gantt provides the menu filtering support for each column. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/documentation/api/gantt/#allowfiltering) property to true along with injecting the [`Filter`](https://ej2.syncfusion.com/documentation/api/gantt/#filtermodule) module as shown in the following code example. Filtering feature can also be customized using the [`filterSettings`](https://ej2.syncfusion.com/documentation/api/gantt/filterSettings/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs19" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the [`allowSorting`](https://ej2.syncfusion.com/documentation/api/gantt/#allowsorting) property to `true`. Inject the [`Sort`](https://ej2.syncfusion.com/documentation/api/gantt/#sortmodule) module as follows. If the [`Sort`](https://ej2.syncfusion.com/documentation/api/gantt/#sortmodule) module is not injected, you cannot sort the records when a header is clicked. The sorting feature can be customized using the [`sortSettings`](https://ej2.syncfusion.com/documentation/api/gantt/sortSettings/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs20" %}

## Enabling predecessors or task relationships

Predecessor or task dependency in the Gantt control is used to depict the relationship between the tasks.

* Start to Start (SS): You cannot start a task until the dependent task starts.
* Start to Finish (SF): You cannot finish a task until the dependent task finishes.
* Finish to Start (FS): You cannot start a task until the dependent task completes.
* Finish to Finish (FF): You cannot finish a task until the dependent task completes.
You can show the relationship in tasks by using the [`dependency`](https://ej2.syncfusion.com/documentation/api/gantt/taskFields/#dependency) property as shown in the following code example.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs21" %}

## Assigning resources

You can display and assign the resource for each task in the Gantt control. Create a collection of JSON object, which contains id, name, unit and group of the resources and assign it to the [`resources`](https://ej2.syncfusion.com/documentation/api/gantt/#resources) property. Map these fields to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/documentation/api/gantt/#resourceFields) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs22" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs23" %}