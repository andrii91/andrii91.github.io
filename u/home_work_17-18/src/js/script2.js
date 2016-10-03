$(document).ready(function() {

	var onclick = function() {
		var searchText = $("#searchEdit").val();
		var url = "https://pixabay.com/api/";
		url += "?username=kosgis";
		url += "&key=3204085-bf48a7e1c1f4d2fd9d2960119";
		url += "&q=" + searchText;
		$(".foto").html("Загрузка...");
		$.ajax({url: url}).then(function(data) {
			console.log("Data: ", data);
			var s = "";
			for(var i = 0; i < data.hits.length; i++) {
				s += "<img src='" + data.hits[i].userImageURL + "'>";
			}
			$(".foto").html(s)
		})
	};

	$("#searchButton").one("click", onclick);
	$("#searchEdit").on("keypress", function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			onclick();
		}
	});

	var Human = {
		name: 'Artur', 
		age: 25, 
		paul: 'man', 
		growth: 182, 
		weight: 75
	};
 	function Worker () {
		this.placeOfWork = 'in office';
		this.salary = 500;
		this.work = function () {
			console.log("I am work " + this.placeOfWork + ". My salary " + this.salary + " $ ");
		};
 	}
	function Student () {
		this.plaseOfStudy = 'university'; 
		this.scholarship = 1200;
		this.watchSerials = function () {
			console.log("Смотрю сериалы");
		};
 	}

	Worker.prototype = Human;
 	var newWorker = new Worker;
	for (var i in newWorker) {
		console.log(newWorker[i])
	}

	newWorker1 = newWorker;
	console.log("newWorker1", newWorker1);
	newWorker2 = newWorker;
	console.log("newWorker2", newWorker2);
 	newWorker3 = newWorker;
	console.log("newWorker3", newWorker3);

	Student.prototype = Human;
	var newStudent = new Student;
	console.log("newStudent", newStudent);

	newStudent1 = newStudent;
	console.log("newStudent1", newStudent1);
	newStudent2 = newStudent
	console.log("newStudent2", newStudent2);
 	newStudent3 = newStudent;
	console.log("newStudent3", newStudent3);
});