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
    return App\User::all();
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
    $data = [
        (object)['name' => 'alice'],
        (object)['name' => 'jane'],
        (object)['name' => 'eve'],
    ];
    return $data;
});

$router->get('/playlist', ['middleware' => 'jwt.auth', function() {
    return [
        'list1',
        'list2',
        'list3',
        'list4'
    ];
}]);