---
layout: post
title: Holidays in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Holidays in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Holidays 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Holidays in ##Platform_Name## Gantt control

Non-working days in a project can be displayed in the Gantt control using the [`holidays`](../api/gantt/#holidays) property. Each holiday can be defined with the following properties:

* [`from`](../api/gantt/holiday/#from): Defines start date of the holiday(s).
* [`to`](../api/gantt/holiday/#to): Defines end date of the holiday(s).
* [`label`](../api/gantt/holiday/#label): Defines the description or label for the holiday.
* [`cssClass`](../api/gantt/holiday/#cssclass): Formats the holidays label in the Gantt chart.

To highlight the holidays, inject the [`DayMarkers`](../api/gantt/#daymarkersmodule) module into the Gantt control.

The following code example shows how to display the non-working days in the Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/holidays-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/holidays-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/holidays-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/holidays-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/holidays-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/holidays-cs1" %}
{% endif %}