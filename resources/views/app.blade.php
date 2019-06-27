<!doctype html>
<html lang="{{ str_replace('_','-',app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{--<meta http-equiv="X-UA-Compatible" content="ie=edge">--}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/1.5.14/vuetify.min.css">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Document</title>
</head>
<body>
<div id="app"></div>


<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>