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
    // return App\User::all();
    // return App\Playlist::all();
    $user = App\User::first();
    return $user->playlists()->get();
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
$router->delete('/api/playlists', ['middleware' => 'jwt.auth', 'uses' => 'PlaylistController@destroy']);
$router->get('/api/latest', 'PlaylistController@latest');