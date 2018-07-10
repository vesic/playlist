<?php

use Illuminate\Database\Seeder;

use App\User;

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
        User::create([
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
    }
}
