---
layout: post
title: Check or Uncheck in Checkbox Column Programmatically in ##Platform_Name## Gantt control | Syncfusion
description: Check or Uncheck in Checkbox Column Programmatically in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check Uncheck in Checkbox Column
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check or Uncheck in Checkbox Column Programmatically in ##Platform_Name## Gantt control

In the Gantt Component, check boxes can be checked and unchecked programmatically using the method support. As described below,  to achieve this  [`selectCheckboxes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectcheckboxes) method from the `TreeGridComponent` is used in which we can check the checkboxes dynamically and uncheck the checkboxes by passing the same Indexes to that method. Refer to the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/how-to-checkoruncheck-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-checkoruncheck-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-checkoruncheck-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/how-to-checkoruncheck-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-checkoruncheck-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to-checkoruncheck-cs1" %}
{% endif %}