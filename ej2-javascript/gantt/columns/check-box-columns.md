---
layout: post
title: Check box columns in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Check box columns in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check box columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check box columns in ##Platform_Name## Gantt control

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../../api/gantt/column/#displayascheckbox) property as **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/checkbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/checkbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/checkbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/checkbox-cs1" %}
{% endif %}

## Controlling Grid actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](../../api/gantt/#allowfiltering), [`allowSorting`](../../api/gantt/#allowsorting), [`allowReordering`](../../api/gantt/#allowreordering), and [`allowEditing`](../../api/gantt/#editsettings) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/Grid-actions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/Grid-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/Grid-actions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/Grid-actions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/Grid-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/Grid-actions-cs1" %}
{% endif %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](../../common/internationalization/#number-formatting) or [date](../../common/internationalization/#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* date time

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](../../api/gantt/#datasource).
> In case if the first record of the [`dataSource`](../../api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.
