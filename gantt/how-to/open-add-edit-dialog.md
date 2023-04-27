---
layout: post
title: Open add edit dialog in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Open add edit dialog in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open add edit dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open add edit dialog in ##Platform_Name## Gantt control

Gantt add and edit dialogs can be opened dynamically by using [`openAddDialog`](../../api/gantt/#openadddialog) and [`openEditDialog`](../../api/gantt/#openeditdialog) methods. The following code example shows how to open add and dialog on separate button click actions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/openEditAddDialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/openEditAddDialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/openEditAddDialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/openEditAddDialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/openEditAddDialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/openEditAddDialog-cs1" %}
{% endif %}

>NOTE: We should select any one of the row in Gantt to open the edit dialog.