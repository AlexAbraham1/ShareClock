<!doctype html>
<html lang="en" ng-app="listApp">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular-route.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular-resource.js"></script>
	<script src="/scripts/pages/list/app.js"></script>


</head>
<body ng-controller="MainCtrl">


	<table border = "1" style="text-align: center;">

		<tr style="font-weight: bold;">
			<th>FILE NAME</th>
			<th>FILE ID</th>
			<th>ACTION</th>
		</tr>
		<tr ng-repeat="file in files">
			<td> {{ file.name }} </td>
			<td> {{ file.id }} </td>

			<td>
				<button ng-click='viewFile(file.id)'>VIEW</button>
				<button ng-click='removeFile(file.id)'>DELETE</button>
			</td>
		</tr>
	</table>

</body>
</html>


