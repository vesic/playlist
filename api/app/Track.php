<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    protected $fillable = [
        'name', 'url'
    ];

    // public function user()
    // {
    //     return $this->belongsTo('App\User');
    // }
}
