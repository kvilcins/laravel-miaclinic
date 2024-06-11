<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ServiceWork
 * 
 * @property int $service_id
 * @property int $work_id
 * 
 * @property Service $service
 * @property Work $work
 *
 * @package App\Models
 */
class ServiceWork extends Model
{
	protected $table = 'service_work';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'service_id' => 'int',
		'work_id' => 'int'
	];

	public function service()
	{
		return $this->belongsTo(Service::class);
	}

	public function work()
	{
		return $this->belongsTo(Work::class);
	}
}
