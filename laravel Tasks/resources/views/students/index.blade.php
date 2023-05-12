@extends('layouts.app')

@section('content')
<div class="container">
    <div class="d-flex justify-content-around align-items-baseline">
        <h1 class="text-bg-primary  p-2 rounded-2"><i class="bi bi-people-fill"></i> Students Table</h1>
        <a class="btn btn-success fs-3" href="{{ url('/students/create') }}">
            <i class="bi bi-person-add"></i> Add student
        </a>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-8 fs-4">
            @if (session('success'))
                <div class="alert alert-success text-center fs-3">
                    {{ session('success') }}
                </div>
            @endif
            @if (session('success-delete'))
                <div class="alert alert-success text-center container fs-2">
                    {{ session('success-delete') }}
                </div>
            @endif
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">IDno</th>
                        <th scope="col">Name</th>
                        <th scope="col">Track</th>
                        <th scope="col">Age</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>
                @foreach ($students as $student)
                    <tr class="fs-2">
                        <th scope="row">{{$loop->index+1}}</th>
                        <td>{{ $student->IDno }}</td>
                        <td>{{ $student->name }}</td>
                        <td>{{ $student->track->name }}</td>
                        <td>{{ $student->age }}</td>
                        <td ><a class="btn btn-primary" href="{{ url('/students/update', $student) }}"><i class="bi bi-pencil-square fs-2 p-1 "></i></a></td>
                        <td>
                            <form action=" {{ url('/students/' . $student->id) }}" method="POST">
                                @method('DELETE')
                                @csrf
                                <button class="btn btn-danger" type="submit">
                                    <i class="bi bi-trash3-fill fs-2 p-1"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
                </tbody>

            </table>
        </div>
    </div>
</div>
@endsection
