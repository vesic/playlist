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
        $desc = $request->input('desc');
        $playList = \App\Playlist::create([
            'user_id' => $request->auth->id,
            'name' => $name,
            'desc' => $desc
        ]);
        return $playList;
    }

    public function latest() {
        return Playlist::all();
    }

    public function destroy(Request $request) {
        $id = $request->input('id');
        // $deleted = \App\Playlist::where(
        //     ['user_id', $request->auth->id],
        //     ['id' => $id]
        // )->delete();
        $p = \App\Playlist::where(['user_id', $request->auth->id], ['id' => $id]);
        // $p->destroy();
        return $p;
    }
    //
}
