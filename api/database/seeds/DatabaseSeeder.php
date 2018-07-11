<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Playlist;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call('UsersTableSeeder');
        $user = User::create([
            'name' => 'alice',
            'email' => 'alice@alice.com',
            'password' => app('hash')->make('pass123')
        ]);
        User::create([
            'name' => 'bob',
            'email' => 'bob@bob.com',
            'password' => app('hash')->make('pass123')
        ]);
        User::create([
            'name' => 'eve',
            'email' => 'eve@eve.com',
            'password' => app('hash')->make('pass123')
        ]);

        Playlist::create([
            'user_id' => 1,
            'name' => 'alice playlist 1'
        ]);
        Playlist::create([
            'user_id' => 1,
            'name' => 'alice playlist 2'
        ]);
        Playlist::create([
            'user_id' => 1,
            'name' => 'alice playlist 3'
        ]);

        Playlist::create([
            'user_id' => 2,
            'name' => 'bob playlist 1'
        ]);
        Playlist::create([
            'user_id' => 2,
            'name' => 'bob playlist 2'
        ]);
        Playlist::create([
            'user_id' => 2,
            'name' => 'bob playlist 3'
        ]);

        Playlist::create([
            'user_id' => 3,
            'name' => 'eve playlist 1'
        ]);
        Playlist::create([
            'user_id' => 3,
            'name' => 'eve playlist 2'
        ]);
        Playlist::create([
            'user_id' => 3,
            'name' => 'eve playlist 3'
        ]);
    }
}
