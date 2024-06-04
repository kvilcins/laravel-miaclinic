@extends('layouts.main')
@section('content')
    <section class="content">
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
    </section>
@endsection