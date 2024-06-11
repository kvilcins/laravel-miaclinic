@extends('layouts.main')

@section('content')
    @foreach ($templates as $template)
        @if ($template->name == 'default')
            @include('templates.default', ['page' => $template])
        @endif
    @endforeach
@endsection