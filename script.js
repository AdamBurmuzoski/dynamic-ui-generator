
        window.onload = function() {
            generateForms();
        }
         // The embedded JSON files
        const json1 = {
    "DisplayType": "Field List",
    "Name": "All Requests",
    "pxObjClass": "CS-Data-RPA-FieldGroup",
    "pyExpanded": "true",
    "Fields": [
        {
            "DisplayAs": "Dropdown",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "Journal Instructions",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber",
            "Value": "One-Time",
            "ManualDropdownOptions": [
                {
                    "Key": "One-Time",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "One-Time"
                },
                {
                    "Key": "Recurring Fixed",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Recurring Fixed"
                },
                {
                    "Key": "Recurring Income Payment",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Recurring Income Payment"
                }
            ]
        },
        {
            "DisplayAs": "Text",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "Available Funds",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber"
        },
        {
            "DisplayAs": "Date",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "As of Date",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber",
            "Value": "2/14/2023"
        }
    ]
};

        const json2 = {
    "DisplayType": "Field List",
    "Name": "One-Time",
    "pxObjClass": "CS-Data-RPA-FieldGroup",
    "pyExpanded": "true",
    "Fields": [
        {
            "DisplayAs": "Date",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "Process Date (Future Date Only)",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber"
        },
        {
            "DisplayAs": "Dropdown",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "Type",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber",
            "Value": "Distribute Cash",
            "ManualDropdownOptions": [
                {
                    "Key": "Distribute Cash",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Distribute Cash"
                }
            ]
        }
    ]
};
const json3 = {
    "DisplayType": "Field List",
    "Name": "Recurring Fixed",
    "pxObjClass": "CS-Data-RPA-FieldGroup",
    "pyExpanded": "true",
    "Fields": [
        {
            "DisplayAs": "Date",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "Pref Date (Future Date Only)",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber"
        },
        {
            "DisplayAs": "Date",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "End Date",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber"
        },
        {
            "DisplayAs": "Dropdown",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "Frequency",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber",
            "Value": "Monthly",
            "ManualDropdownOptions": [
                {
                    "Key": "Monthly",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Monthly"
                },
                {
                    "Key": "LastBiz Day",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "LastBiz Day"
                },
                {
                    "Key": "Every 2 Months",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Every 2 Months"
                },
                {
                    "Key": "2 Times/Month",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "2 Times/Month"
                },
                {
                    "Key": "Quarterly",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Quarterly"
                },
                {
                    "Key": "2 Times/Year",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "2 Times/Year"
                },
                {
                    "Key": "Annual",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Annual"
                },
                {
                    "Key": "Weekly-Mon",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Weekly-Mon"
                },
                {
                    "Key": "Weekly-Tue",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Weekly-Tue"
                },
                {
                    "Key": "Weekly-Wed",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Weekly-Wed"
                },
                {
                    "Key": "Weekly-Thur",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Weekly-Thur"
                },
                {
                    "Key": "Weekly-Fri",
                    "pxObjClass": "CS-Data-KeyValuePair",
                    "Value": "Weekly-Fri"
                }
            ]
        },
        {
            "DisplayAs": "Date",
            "FieldType": "Manual",
            "IsDisabled": "false",
            "IsRequired": "false",
            "Key": "2nd Pref Date (Semi-Monthly)",
            "pxObjClass": "CS-Data-RPA-Field",
            "pyTemplateGeneric": "AccountNumber"
        }
    ]
};
const json4 = {
    "DisplayType":"Field List"
    ,"Name":"Recurring Income Payment"
    ,"pxObjClass":"CS-Data-RPA-FieldGroup"
    ,"pyExpanded":"true"
    ,"Fields":[ 
    {
    "DisplayAs":"Date"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Pref Date (Future Date Only)"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"All Income"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Dividends"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Interest"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Money Market"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ] 
    }

;
const json5 = {
    "DisplayType":"Table"
    ,"Name":"Journal"
    ,"pxObjClass":"CS-Data-RPA-FieldGroup"
    ,"pyExpanded":"true"
    ,"Fields":[ 
    {
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"To be Processed"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"Text"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Receiving Account Number"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"TextArea"
    ,"FieldType":"Manual"
    ,"IsDisabled":"true"
    ,"IsRequired":"false"
    ,"Key":"Receiving Account Registration"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"Text"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Cash Amount"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"true"
    ,"IsRequired":"false"
    ,"Key":"NIGO"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"TextArea"
    ,"FieldType":"Manual"
    ,"IsDisabled":"true"
    ,"IsRequired":"false"
    ,"Key":"Results"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ] 
    ,"Rows":[ 
    {
    "pxObjClass":"CS-Data-RPA-Row"
    ,"Fields":[ 
    {
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"To be Processed"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"Text"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Receiving Account Number"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"TextArea"
    ,"FieldType":"Manual"
    ,"IsDisabled":"true"
    ,"IsRequired":"false"
    ,"Key":"Receiving Account Registration"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"Text"
    ,"FieldType":"Manual"
    ,"IsDisabled":"false"
    ,"IsRequired":"false"
    ,"Key":"Cash Amount"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    }
    ,{
    "DisplayAs":"Checkbox"
    ,"FieldType":"Manual"
    ,"IsDisabled":"true"
    ,"IsRequired":"false"
    ,"Key":"NIGO"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"false"
    }
    ,{
    "DisplayAs":"TextArea"
    ,"FieldType":"Manual"
    ,"IsDisabled":"true"
    ,"IsRequired":"false"
    ,"Key":"Results"
    ,"pxObjClass":"CS-Data-RPA-Field"
    ,"pyTemplateGeneric":"AccountNumber"
    ,"Value":"test &lt;&lt; &gt; &lt;&gt;' \" \" &amp; \\/\\&amp;\\\" s\\y&amp;m?b&gt;o&lt;ls"
    }
    ] 
    }
    ] 
    };

        // An array of the embedded JSON objects
        const jsonData = [json1, json2, json3, json4, json5];

        function generateForms() {
            let container = document.getElementById('container');
    
            for(let i=0; i<jsonData.length; i++){
                let obj = jsonData[i];
                let formElement = document.createElement("div");
                formElement.className = 'form-container';
    
                if(obj.DisplayType === "Table"){
                    formElement.classList.add('table-container');
                }
    
                let headerContainer = document.createElement('div');
                headerContainer.className = 'header-container';
                
                let header = document.createElement("h3");
                header.textContent = obj.Name;
                headerContainer.appendChild(header);
                
                let table;
                if(obj.DisplayType === "Table"){
                    table = document.createElement("table");
    
                    let addButton = document.createElement("button");
                    addButton.className = 'add-row-button';
                    addButton.textContent = "Add Row";
                    addButton.onclick = function() { addRow(obj, table); };
                    headerContainer.appendChild(addButton);
    
                    let deleteButton = document.createElement("button");
                    deleteButton.className = 'delete-row-button';
                    deleteButton.textContent = "Delete Row";
                    deleteButton.onclick = function() { deleteRow(table); };
                    headerContainer.appendChild(deleteButton);
                }

                formElement.appendChild(headerContainer);
    
                let clearDiv = document.createElement("div");
                clearDiv.className = 'clear';
                formElement.appendChild(clearDiv);
    
                if(obj.DisplayType === "Field List"){
                    let fieldList = obj.Fields;
    
                    for(let j=0; j<fieldList.length; j++){
                        let field = fieldList[j];
                        formElement.appendChild(generateFormField(field));
                    }
                }
                else if(obj.DisplayType === "Table"){
                    let thead = document.createElement("thead");
                    let tbody = document.createElement("tbody");
    
                    let headerRow = document.createElement("tr");
                    let fieldList = obj.Fields;
                    for(let j=0; j<fieldList.length; j++){
                        let th = document.createElement("th");
                        th.textContent = fieldList[j].Key;
                        headerRow.appendChild(th);
                    }
                    thead.appendChild(headerRow);
                    table.appendChild(thead);
    
                    let rowList = obj.Rows;
                    for(let j=0; j<rowList.length; j++){
                        let tr = generateTableRow(obj, rowList[j].Fields);
                        tbody.appendChild(tr);
                    }
                    table.appendChild(tbody);
                    formElement.appendChild(table);
                }
    
                container.appendChild(formElement);
            }
        }
        function generateFormField(field){
            let fieldElement;
            let label = document.createElement("label");
            label.textContent = field.Key;
    
            if(field.DisplayAs === "Text"){
                fieldElement = document.createElement("input");
                fieldElement.type = "text";
            }
            else if(field.DisplayAs === "Checkbox"){
                fieldElement = document.createElement("input");
                fieldElement.type = "checkbox";
            }
            else if(field.DisplayAs === "Date"){
                fieldElement = document.createElement("input");
                fieldElement.type = "date";
            }
            else if(field.DisplayAs === "Dropdown"){
                fieldElement = document.createElement("select");
                for(let i=0; i<field.ManualDropdownOptions.length; i++){
                    let option = document.createElement("option");
                    option.textContent = field.ManualDropdownOptions[i].Key;
                    option.value = field.ManualDropdownOptions[i].Value;
                    fieldElement.appendChild(option);
                }
            }
            else if(field.DisplayAs === "TextArea"){
                fieldElement = document.createElement("textarea");
            }
            
            fieldElement.disabled = field.IsDisabled === "true";
            fieldElement.required = field.IsRequired === "true";
            fieldElement.name = field.Key;
    
            let wrapper = document.createElement("div");
            wrapper.className = 'form-field';
            wrapper.appendChild(label);
            wrapper.appendChild(fieldElement);
            return wrapper;
        }
    
        function generateTableCell(field){
            let td = document.createElement("td");
            td.appendChild(generateFormFieldWithoutLabel(field));
            return td;
        }
    
        function generateFormFieldWithoutLabel(field){
            let fieldElement;
    
            if(field.DisplayAs === "Text"){
                fieldElement = document.createElement("input");
                fieldElement.type = "text";
            }
            else if(field.DisplayAs === "Checkbox"){
                fieldElement = document.createElement("input");
                fieldElement.type = "checkbox";
            }
            else if(field.DisplayAs === "Date"){
                fieldElement = document.createElement("input");
                fieldElement.type = "date";
            }
            else if(field.DisplayAs === "Dropdown"){
                fieldElement = document.createElement("select");
                for(let i=0; i<field.ManualDropdownOptions.length; i++){
                    let option = document.createElement("option");
                    option.textContent = field.ManualDropdownOptions[i].Key;
                    option.value = field.ManualDropdownOptions[i].Value;
                    fieldElement.appendChild(option);
                }
            }
            else if(field.DisplayAs === "TextArea"){
                fieldElement = document.createElement("textarea");
            }
            
            fieldElement.disabled = field.IsDisabled === "true";
            fieldElement.required = field.IsRequired === "true";
            fieldElement.name = field.Key;
    
            return fieldElement;
        }
    
        function generateTableRow(obj, row){
            let tr = document.createElement("tr");
    
            for(let i=0; i<obj.Fields.length; i++){
                let td = generateTableCell(row[i]);
                tr.appendChild(td);
            }
    
            return tr;
        }
    
        function addRow(obj, table){
            let tbody = table.getElementsByTagName("tbody")[0];
            let rowList = obj.Rows;
    
            let fields = rowList[0].Fields;
            let tr = generateTableRow(obj, fields);
            tbody.appendChild(tr);
        }
    
        function deleteRow(table){
            let tbody = table.getElementsByTagName("tbody")[0];
            let rows = tbody.getElementsByTagName("tr");
    
            if(rows.length > 1){
                tbody.removeChild(rows[rows.length - 1]);
            }
        }

        // Preload JSON data into the textarea
document.getElementById('jsonTextarea').value = JSON.stringify(jsonData, null, 2);


// Event listener for real-time updates
document.getElementById('jsonTextarea').addEventListener('input', function() {
    try {
        const updatedData = JSON.parse(this.value);
        jsonData.length = 0; // Clear the current jsonData array
        jsonData.push(...updatedData); // Add the updated data

        // Clear the existing forms
        container.innerHTML = ''; 
        // Re-generate the forms with the new JSON data
        generateForms();
    } catch (e) {
        console.error('Invalid JSON:', e);
    }
});

