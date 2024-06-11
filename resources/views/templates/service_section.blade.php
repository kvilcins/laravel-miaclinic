@extends('layouts.main')
@section('content')
    <section class="content">
        <ul>
            @foreach ($templates as $template)
                <li>
                    ID: {{ $template->id }}<br>
                    Имя: {{ $template->name }}<br>
                    Релейшн модель: {{ $template->for }}<br>
                    Описание: {{ $template->description }}<br>
                    Источник: {{ $template->source }}<br>
                    Создано: {{ $template->created_at }}<br>
                    Обновлено: {{ $template->updated_at }}
                </li>
            @endforeach
        </ul>
    </section>
@endsection
