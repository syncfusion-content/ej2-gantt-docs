---
layout: post
title: Event markers in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Event markers in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Event markers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Event markers in ##Platform_Name## Gantt control

The event markers in the Gantt control is used to highlight the important events in a project. Event markers can be initialized by using the [`eventMarkers`](../api/gantt/eventMarker/) property, and you can define date and label for the event markers using the [`day`](../api/gantt/eventMarker/#day) and [`label`](../api/gantt/eventMarker/#label) properties. You can also customize it using the [`cssClass`](../api/gantt/eventMarker/#cssclass) properties. The following code example shows how to add event markers in the Gantt control.

To highlight the days, inject the [`DayMarkers`](../api/gantt/#daymarkersmodule) module into the Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/event-markers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/event-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/event-markers-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/event-markers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/event-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/event-markers-cs1" %}
{% endif %}

## Displaying eventMarkers in stacked manner

When [`eventMarkers`](../api/gantt/eventMarker/) are given in consecutive dates and zoomToFit is performed, they may overlap. To avoid this, you can update the position of the eventMarkers in the [`dataBound`](../api/gantt/#databound) and [`actionComplete`](../api/gantt/#actioncomplete) events so that they are not overlapped and are visible to read.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/event-markers-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/event-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/event-markers-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/event-markers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/event-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/event-markers-cs2" %}
{% endif %}

# Label positions in ##Platform_Name## gantt control

The EJ2 Gantt chart offers powerful features for customizing various labels position within the chart, enabling users to present relevant project information clearly. In EJ2 Gantt chart, labelSettings feature provides three key options for label customization: [`rightLabel`](../api/gantt/labelSettings/#rightlabel), [`taskLabel`](../api/gantt/labelSettings/#tasklabel), and [`leftLabel`](../api/gantt/labelSettings/#leftlabel). Label positions can be initialized by using the [`labelSettings`](../api/gantt/labelSettings/) property. 

The following code example shows how to add label positions in the gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/label-position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/label-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/label-position-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/label-position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/label-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/label-position-cs1" %}
{% endif %}

# Managing event marker overlapping in ##Platform_Name## gantt control

In the EJ2 Gantt control, it is possible to customize multiple [`eventMarkers`](../api/gantt/eventMarker/) for the same date. However, by default, in such scenarios, these markers may overlap each other, resulting in visual clutter. To manage this, the following sample code demonstrates how to utilize the Gantt dataBound function to obtain label and arrow classes. It performs a loop action to fulfill the current requirement and to avoid overlapping. For further clarification, the code snippet below illustrates the flow of its implementation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/eventmarkeroverlap-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/eventmarkeroverlap-cs1" %}
{% endif %}
