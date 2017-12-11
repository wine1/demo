window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
		window.IDBTransaction = window.IDBTransaction ||window.webkitIDBTransaction || window.mozIDBTransaction || window.msIDBTransaction;
		 window.IDBKeyRange = window.IDBKeyRange || window.webkitKeyRange || window.mozKeyRange || window.IDBKeyRange;
		 window.IDBCursor = window.IDBCursor || window.webkitIDBCursor || window.mozIDBCursor || window.msIDBCursor;

		 var dbName = "MyData";
		 var dbversion = "20171207";
		 var idb,dataTable;
		 var data;

		 function window_onload() {
		 	var dbConnect = indexedDB.open(dbName, dbversion);//连接数据库
		 	//连接成功
		 	dbConnect.onsuccess = function(e) {
		 		idb = e.target.result;
		 		dataTable = document.getElementById("dataTable");
		 	};
		 	dbConnect.onerror = function() {
		 		alert('数据库连接失败');
		 	};
		 

		 dbConnect.onupgradeneeded = function(e) {
		 	idb = e.target.result;
		 	if(!idb.objectStrokeNames.contains('orders')) {
		 		var tx = e.target.transaction;
		 		tx.oncomplete = function() {
		 			showAllData(true);
		 		}
		 		tx.onabort = function(e) {
		 			alert('对象创建仓库失败');
		 		};
		 		var store = idb.createObjectStore(name, optionalParameters);
		 		alert('对象创建仓库成功');

		 		var name = 'codeIndex';
		 		var keyPath = 'code';
		 		var optionalParameters = {
		 			unique: true,
		 			multiEntry: false
		 		};
		 		var idx = store.createIndex(name, keyPath, optionalParameters);
		 		alert('创建索引成功');
		 	}
		 };
		}
		 function tbxNum_onblur() {
		 	var num,price;
		 	num = parseInt(document.getElementById("tbxNum").value);
		 	price = parseInt(document.getElementById("tbxPrice").value);
		 	if(isNaN(num*price)) {
		 		document.getElementById("tbxNum").value = "0";
		 		document.getElementById("tbxMoney").value = "0";
		 	}else {
		 		document.getElementById("tbxMoney").value = num * price;
		 	}
		 }

		 function tbxPrice_onblur() {
		 	num = psrseInt(document.getElementById("tbxNum").value);
		 	price = parseFloat(document.getElementById("tbxPrice").value);

		 	if(isNaN(num*price)) {
		 		document.getElementById("tbxPrice").value = "0";
		 		document.getElementById("tbxMoney").value = "0";
		 	}else {
		 		document.getElementById("tbxMoney").value = num * price;
		 	}
		 }

		 function btnAdd_onclick() {
		 	data = new Object();
		 	data.Code = document.getElementById("tbxCode").value;
		 	data.Date = document.getElementById("tbxDate").value;
		 	data.GoodsCode = document.getElementById("tbxGoodsCode").value;
		 	data.BrandName = document.getElementById("tbxBrandName").value;
		 	data.Num = document.getElementById("tbxNum").value;
		 	data.Price = document.getElementById("tbxPrice").value;
		 	data.PersonName = document.getElementById("tbxPersonName").value;
		 	data.Email = document.getElementById("tbxEmail").value;
		 	var tx = idb.transaction(['order'],"readwrite");
		 	var chkErrorMsg = "";
		 	tx.oncomplete = function() {
		 		if(chkErrorMsg != "") 
		 			alert(chkErrorMsg);
		 		else {
		 			alert('追加数据成功');
		 			showAllData(false);
		 			btnNew_onclick();
		 		}
		 	}
		 	tx.onabort = function() {
		 		alert('追加数据失败');
		 	}
		 	var store = tx.objectStore('orders');
		 	var idx = store.index('codeIndex');
		 	var range = IDBKeyRange.only(data.Code);
		 	var direction = "next";
		 	var req = idx.openCursor(range, direction);
		 	req.onsuccess = function() {
		 		var cursor = this.result;
		 		if(cursor) {
		 			chkErrorMsg = "输入的订单编号在数据库中已经存在";
		 		}else {
		 			var value = {
		 				code: data.Code,
		 				date: data.Date,
		 				goodscode: data.GoodsCode;
		 				brandName: data.personName,
		 				email: data.Email
		 			};
		 			store.put(value);
		 		}
		 	}
		 	req.onerror = function() {
		 		alert('追加数据失败');
		 	}
		 }

		 function btnUpdate_onclick() {
		 	data = new Object();
			data.Code = document.getElementById("tbxCode").value;
		 	data.Date = document.getElementById("tbxDate").value;
		 	data.GoodsCode = document.getElementById("tbxGoodsCode").value;
		 	data.BrandName = document.getElementById("tbxBrandName").value;
		 	data.Num = document.getElementById("tbxNum").value;
		 	data.Price = document.getElementById("tbxPrice").value;
		 	data.PersonName = document.getElementById("tbxPersonName").value;
		 	data.Email = document.getElementById("tbxEmail").value;
		 	var tx = idb.transaction(['order'],"readwrite");
		 	tx.oncomplete = function() {
		 		alert('修改数据失败');
		 	}
		 	var store = tx.objectStore('orders'); 
		 	var idx = store.index('codeIndex');
		 	var range = IDBKeyRange.only(data.Code);
		 	var direction = "next";
		 	var req = idx.openCursor(range, direction);
		 	req.onsuccess = function() {
		 		vsr cursor = this.result;
		 		if(cursor) {
		 			var value = {
		 				id: cursor.value.id,
		 				code: data.Code,
		 				date: data.Date,
		 				goodscode: data.GoodsCode,
		 				brandName: data.BrandName,
		 				num: data.Num,
		 				price: data.Price,
		 				personName: data.PersonName,
		 				email: data.Email
		 			};
		 			cursor.update(value);
		 		}
		 	}
		 	req.onerror = function() {
		 		alert('修改数据失败');
		 	}
		 }