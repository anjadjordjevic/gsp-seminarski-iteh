<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipLinije extends Model
{
    use HasFactory;
    protected $fillable = ['naziv'];

    public function linije()
    {
        return $this->hasMany(Linija::class);
    }
}
