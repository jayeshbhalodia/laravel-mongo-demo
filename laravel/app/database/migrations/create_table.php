<?php

use Illuminate\Database\Migrations\Migration;

class CreateIdeaTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('test', function($table) {
            $table->int('uid')->nullable;
            $table->int('nid')->nullable();
            $table->text('n_name')->nullable();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
	    Schema::drop('test');
	}

}
