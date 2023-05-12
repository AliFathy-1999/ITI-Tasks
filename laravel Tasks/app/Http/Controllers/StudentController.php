<?php

namespace App\Http\Controllers;
use App\Models\Student;
use App\Models\Track;
use Faker\Guesser\Name;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return view("students.index",["students" => $students]);
    }
    public function create()
    {
        $tracks = Track::all()->pluck('name', 'id');
        return view('students.create', compact('tracks'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'IDno' => [
                'required',
                'numeric',
                'max:5000',
                Rule::unique('students')->ignore($request->id)
            ],
            'age' => 'required|numeric|max:20',
            'track_id' => 'required'
        ]);
        $data = $request->all();
        Student::create($data);
        return back()->with('success', 'Student added Successful !!');
    }
    public function update($id)
    {
        $student = Student::find($id);
        return view("students.edit",["student" => $student]);
    }
    public function edit(Request $request,$id)
    {
        $student = Student::find($id);
        $student->name = $request->name;
        $student->IDno = $request->IDno;
        $student->track_id = $request->track_id;
        $student->age = $request->age;
        if($student->save())
        {
            $request->session()->flash('success', 'Student Edited Successful !!');
            return redirect('/students');
        }else{
            return view("welcome");
        }

    }
    public function destroy(Request $request,$id)
    {
        Student::destroy($id);
        $request->session()->flash('success-delete', 'Student Deleted Successful !!');
        return redirect('/students');
    }
}
