<?php 

use Jenssegers\Mongodb\Model as Eloquent;

class Networkaccess extends Eloquent {	
  	protected $connection = 'mongodb';
	protected $collection = 'network_access';
    protected $dates = array('timestamp');
}