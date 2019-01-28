<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Role::create([
            'id'   => 1,
            'name'    => 'Owner',
        ]);
        \App\Role::create([
            'id'   => 2,
            'name'    => '管理员',
        ]);
        \App\Role::create([
            'id'   => 99,
            'name'    => '护申符',
        ]);
    }
}
