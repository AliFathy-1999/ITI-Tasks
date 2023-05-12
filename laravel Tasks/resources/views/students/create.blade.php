@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="d-flex justify-content-center m-3">
            <h1 class="text-center text-bg-primary w-25 p-2 rounded-2">
                <i class="bi bi-person-add"></i>
                Add student
            </h1>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8 fs-4 card p-3">
                @if (session('success'))
                    <div class="alert alert-success text-center container fs-2">
                        {{ session('success') }}
                    </div>
                @endif
                {!! Form::open(['url' => 'students/create/student/', 'method' => 'post']) !!}
                <div class="mb-3">
                    <label for="IDno" class="form-label">ID Number</label>
                    {!! Form::number('IDno', null, ['class' => 'form-control form-control-lg', 'id' => 'IDno']) !!}
                </div>
                @error('IDno')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    {!! Form::text('name', null, ['class' => 'form-control form-control-lg', 'id' => 'name']) !!}
                </div>
                @error('name')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    {!! Form::number('age', null, ['class' => 'form-control form-control-lg', 'id' => 'age']) !!}
                </div>
                @error('age')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
                <div class="mb-3">
                    <label for="track_id" class="form-label">Track ID</label>
                    {!! Form::select('track_id', $tracks, null, ['class' => 'form-control form-control-lg']) !!}
                </div>
                @error('track_id')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
                <div class="d-flex justify-content-end">
                    {!! Form::submit('Submit', ['class' => 'btn btn-primary fs-3']) !!}
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
