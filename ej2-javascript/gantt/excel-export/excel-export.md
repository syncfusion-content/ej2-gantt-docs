---
layout: post
title: Excel export in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Excel export in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Excel export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in ##Platform_Name## Gantt control

Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. Use the [`excelExport`](../../api/gantt/#excelexport) and [`csvExport`](../../api/gantt/#csvexport) methods for exporting. To enable Excel export in the Gantt, set the [`allowExcelExport`](../../api/gantt/#allowexcelexport) to true.

To export data to Excel and CSV, inject the `ExcelExport` module in Gantt.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/excel-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/excel-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs2" %}
{% endif %}