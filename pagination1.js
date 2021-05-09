var index = 1;

var navigateToPage = (e) => {
    var pageIndex = e.target.id;
    var changeIndex = index;
    if(pageIndex == "first") {
        changeIndex = 1;
    } else if(pageIndex == "previous") {
        changeIndex -= 1;
    } else if(pageIndex == "next") {
        changeIndex += 1;
    } else {
        changeIndex = pageIndex;
    }

    if(changeIndex > 0 && changeIndex <= empData.length / 10) {
        index = changeIndex;
        constructTableData();
    }
}

var constructIndexes = () => {
    var indexTable  = document.getElementById("indexTable");
    var thead = document.createElement("thead");

    var first = document.createElement("th");
    first.innerText = "First";
    first.id = "first";
    first.addEventListener("click", navigateToPage);

    var previous = document.createElement("th");
    previous.innerText = "Previous";
    previous.id = "previous";
    previous.addEventListener("click", navigateToPage);

    var next = document.createElement("th");
    next.innerText = "Next";
    next.id = "next";
    next.addEventListener("click", navigateToPage);

    thead.appendChild(first);
    thead.appendChild(previous);
    for(var j = 1 ; j <= empData.length / 10 ; j++) {
        var th = document.createElement("th");
        th.innerText = j;
        th.id = j;
        th.addEventListener("click", navigateToPage);
        thead.appendChild(th);
    }
    thead.appendChild(next);
    indexTable.appendChild(thead);
}

var constructTableData = () => {
    var tbody       = document.getElementById("table_tbody");
    tbody.innerHTML = "";
    for(var i = (index - 1) * 10 ; i < index * 10 ; i++) {
        var tr = document.createElement("tr");
        for(const data of Object.values(empData[i])) {
            var td = document.createElement("td");
            td.innerText = data;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

constructTableData();
constructIndexes();
