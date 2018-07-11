<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/hello', 'Welcome@index');

$router->post(
    'auth/login', 
    ['uses' => 'AuthController@authenticate']
);

$router->get('/users', function() {
    $user = App\User::first();
    // $pl = App\Playlist::create(['name'=>'user pl 1']);
    // $user->playlists->associate($pl);
    return $user->playlists()->get();
    // return App\User::all();

    // return App\Playlist::all();
    // App\Playlist::find(1)->save(['name' => 'user pl 1']);
    // $p->user()->save(App\User::first(1));
    // return 'ok';
    // return App\Playlist::find(1)->user()->get();
});

$router->get('/data', ['middleware' => 'jwt.auth', function() {
    $data = [
        (object)['name' => 'alice'],
        (object)['name' => 'jane'],
        (object)['name' => 'eve'],
    ];
    return $data;
}]);

$router->get('/api/data', function() {
    return \App\Playlist::all();
});

$router->get('/api/playlists', ['middleware' => 'jwt.auth', 'uses' => 'PlaylistController@index']);
$router->get('/api/playlists/{id}', ['middleware' => 'jwt.auth', 'uses' => 'PlaylistController@show']);
$router->post('/api/playlists', ['middleware' => 'jwt.auth', 'uses' => 'PlaylistController@store']);
