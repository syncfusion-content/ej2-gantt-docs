---
layout: post
title: Searching in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Searching in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Searching 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Searching in ##Platform_Name## Gantt control

You can search records in the Gantt control by using the [`search`](../../api/gantt/#search) method with search key as a parameter. The Gantt control provides an option to integrate the search text box in the toolbar by adding the search item to the [`toolbar`](../../api/gantt/#toolbar) property.

To search records, inject the `Filter` module into the Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/searching-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/searching-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/searching-cs1" %}
{% endif %}

## Initial search

In the Gantt control, you can load a task with some search criteria and this can be done by using the [`searchSettings`](../../api/gantt/searchSettings/) property. To apply search at initial rendering, set the value for [`fields`](../../api/gantt/searchSettings/#fields), [`operator`](../../api/gantt/searchSettings/#operator), [`key`](../../api/gantt/searchSettings/#key), and [`ignoreCase`](../../api/gantt/searchSettings/#ignorecase) in the [`searchSettings`](../../api/gantt/searchSettings/) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/searching-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/searching-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/searching-cs2" %}
{% endif %}

> By default, Gantt searches all the bound column values. To customize this behavior, define the [`searchSettings.fields`](../../api/gantt/searchSettings/#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](../../api/gantt/searchSettings/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for the values that are not equal to the specified value.

> By default, the [`searchSettings.operator`](../../api/gantt/searchSettings/#operator) value is `contains`.

## Search by external button

To search the Gantt records from an external button, invoke the [`search`](../../api/gantt/#search) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/externalSearch-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/externalSearch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/externalSearch-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/externalSearch-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/externalSearch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/externalSearch-cs1" %}
{% endif %}

>Note: You should set the [`allowFiltering`](../../api/gantt/#allowfiltering) property to `true` for searching the content externally.

## Search specific columns

By default, the Gantt control searches all the columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](../../api/gantt/searchSettings/#fields) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/searching-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/searching-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/searching-cs3" %}
{% endif %}

> In above sample, you can search only **TaskName** and **Duration** column values.

## Clear search by external button

You can set [`searchSettings.key`](../../api/gantt/searchSettings/#key) property as `empty` string, to clear the searched Gantt records from external button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/clear-search-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/clear-search-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/clear-search-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/clear-search-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/clear-search-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/clear-search-cs1" %}
{% endif %}