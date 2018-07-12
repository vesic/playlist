<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Playlist;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

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
            'desc' => $faker->sentence(),
            'name' => 'Alice playlist 1'
        ]);
        Playlist::create([
            'user_id' => 1,
            'desc' => $faker->sentence(),
            'name' => 'Alice playlist 2'
        ]);
        Playlist::create([
            'user_id' => 1,
            'desc' => $faker->sentence(),
            'name' => 'Alice playlist 3'
        ]);
        Playlist::create([
            'user_id' => 1,
            'desc' => $faker->sentence(),
            'name' => 'Alice playlist 4'
        ]);
        Playlist::create([
            'user_id' => 1,
            'desc' => $faker->sentence(),
            'name' => 'Alice playlist 5'
        ]);
        Playlist::create([
            'user_id' => 1,
            'desc' => $faker->sentence(),
            'name' => 'Alice playlist 6'
        ]);

        Playlist::create([
            'user_id' => 2,
            'desc' => $faker->sentence(),
            'name' => 'Bob playlist 1'
        ]);
        Playlist::create([
            'user_id' => 2,
            'desc' => $faker->sentence(),
            'name' => 'Bob playlist 2'
        ]);
        Playlist::create([
            'user_id' => 2,
            'desc' => $faker->sentence(),
            'name' => 'Bob playlist 3'
        ]);
        Playlist::create([
            'user_id' => 2,
            'desc' => $faker->sentence(),
            'name' => 'Bob playlist 4'
        ]);
        Playlist::create([
            'user_id' => 2,
            'desc' => $faker->sentence(),
            'name' => 'Bob playlist 5'
        ]);
        Playlist::create([
            'user_id' => 2,
            'desc' => $faker->sentence(),
            'name' => 'Bob playlist 6'
        ]);

        Playlist::create([
            'user_id' => 3,
            'desc' => $faker->sentence(),
            'name' => 'Eve playlist 1'
        ]);
        Playlist::create([
            'user_id' => 3,
            'desc' => $faker->sentence(),
            'name' => 'Eve playlist 2'
        ]);
        Playlist::create([
            'user_id' => 3,
            'desc' => $faker->sentence(),
            'name' => 'Eve playlist 3'
        ]);
        Playlist::create([
            'user_id' => 3,
            'desc' => $faker->sentence(),
            'name' => 'Eve playlist 4'
        ]);
        Playlist::create([
            'user_id' => 3,
            'desc' => $faker->sentence(),
            'name' => 'Eve playlist 5'
        ]);
        Playlist::create([
            'user_id' => 3,
            'desc' => $faker->sentence(),
            'name' => 'Eve playlist 6'
        ]);
    }
}
