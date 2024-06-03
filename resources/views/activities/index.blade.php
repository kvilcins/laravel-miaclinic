<!DOCTYPE html>
<html>
<head>
    <title>Activities</title>
</head>
<body>
<h1>Activities</h1>

<ul>
    @foreach ($activities as $activity)
        <li>{{ $activity->id }}<br>
            {{ $activity->description }}<br>
            {{ $activity->namespace }}<br>
            {{ $activity->causer_id }}<br>
            {{ $activity->model }}<br>
            {{ $activity->created_at }}
        </li>
    @endforeach
</ul>
</body>
</html>
