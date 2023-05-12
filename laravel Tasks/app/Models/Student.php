<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
class Student extends Model
{
    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = ["IDno","name","track_id","age"];
    public function track()
    {
        return $this->belongsTo(Track::class);
    }
}
