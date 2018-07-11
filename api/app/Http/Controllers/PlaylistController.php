<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use \App\Playlist;

class PlaylistController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(Request $request) {
        return $request->auth->playlists;
    }

    
    public function show(Request $request, $id) {
        return $request->auth->playlists->find($id);
    }

    public function store(Request $request) {
        $name = $request->input('name');
        $playList = \App\Playlist::create([
            'user_id' => $request->auth->,
            'name' => $name
        ]);
        return $playList;
    }
    //
}
