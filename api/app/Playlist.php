<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class Playlist extends Model
{
    protected $fillable = [
        'name', 'desc', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
