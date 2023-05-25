---
layout: post
title: Zooming in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Zooming in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Zooming 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in ##Platform_Name## Gantt control

The zooming support provides options to increase or decrease the width of timeline cells and also provides options to change the timeline units dynamically. This support enables you to view the tasks in a project clearly from minute to decade timespan. To enable the zooming features, define the `ZoomIn`, `ZoomOut`, and `ZoomToFit` items to toolbar items collections, and this action can be performed on external actions such as button click using the [`zoomIn`](../../api/gantt/#zoomin), [`zoomOut`](../../api/gantt/#zoomout), and [`fitToProject`](../../api/gantt/#fittoproject) built-in methods. The following zooming options are available to view the project:

## Zoom in

This support is used to increase the timeline width and timeline unit from years to minutes timespan. When the `ZoomIn` icon was clicked, the timeline cell width is increased when the cell size exceeds the specified range and the timeline unit is changed based on the current zoom levels.

## Zoom out

This support is used to increase the timeline width and timeline unit from minutes to years timespan. When the `ZoomOut` icon was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.

## Zoom to fit

This support is used to view all the tasks available in a project within available area on the chart part of Gantt. When users click the `ZoomToFit` icon, then all the tasks are rendered within the available chart container width.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/zooming-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/zooming-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/zooming-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/zooming-cs1" %}
{% endif %}

## Customizing zooming levels

In Gantt, the zoom in and zoom out actions are performed based on the predefined zooming levels in the `zoomingLevels` property. You can customize the zooming actions by defining the required zooming collection to the `zoomingLevels` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/zooming-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/zooming-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/zooming-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/zooming-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/zooming-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/zooming-cs2" %}
{% endif %}

## Zoom action by methods

You can perform the various zoom actions dynamically or on external click action using the following methods:
* Zoom in - [`zoomIn`](../../api/gantt/#zoomin)
* Zoom out - [`zoomOut`](../../api/gantt/#zoomout)
* Fit to project - [`fitToProject`](../../api/gantt/#fittoproject)

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/zoomingMethods-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/zoomingMethods-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/zoomingMethods-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/zoomingMethods-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/zoomingMethods-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/zoomingMethods-cs1" %}
{% endif %}