---
layout: post
title: Splitting and merging tasks in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Splitting and merging tasks in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Splitting and merging tasks 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Splitting and merging tasks in ##Platform_Name## Gantt control

## Splitting task at load time

To split task at load time, we can define segment details in both hierarchical and self-referential way.

Refer below link for more details.

* [Split task at load time](https://ej2.syncfusion.com/documentation/gantt/data-binding#split-task)

## Split task dynamically

The task can be splitted dynamically, either by using the context menu or dialog.

* `Dialog`: `Segments` tab is rendered in add/edit dialog, when the [`taskFields.segments`](../../api/gantt/taskFields/#segments) or [`taskFields.segmentId`](../../api/gantt/taskFields/#segmentId) property is mapped. Using this tab, we can split the task based on the original start and end date of a particular task.

* `Context menu`: When the [`taskFields.segments`](../../api/gantt/taskFields/#segments) or [`taskFields.segmentId`](../../api/gantt/taskFields/#segmentId) property is mapped and the [`enableContextMenu`](../../api/gantt/#enablecontextmenu) property is enabled, `Split Task` item will be included in the context menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/split-task-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/split-task-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/split-task-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/split-task-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/split-task-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/split-task-cs5" %}
{% endif %}

## Merge tasks

The splitted tasks can be merged either by using the `Merge Task` item of the Context menu or by using the dialog. We can also merge the tasks, by simply dragging the segments together in the UI.

## Limitations of Split tasks

1. Parent and milestone tasks cannot be split into segments.
2. The task must have a width greater than the timeline unit cell in order to be split.
3. Split task is not supported in the `Resource view`.
