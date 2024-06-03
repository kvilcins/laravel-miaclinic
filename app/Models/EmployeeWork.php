<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EmployeeWork
 * 
 * @property int $employee_id
 * @property int $work_id
 * @property int $position
 * 
 * @property Employee $employee
 * @property Work $work
 *
 * @package App\Models
 */
class EmployeeWork extends Model
{
	protected $table = 'employee_work';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'employee_id' => 'int',
		'work_id' => 'int',
		'position' => 'int'
	];

	protected $fillable = [
		'position'
	];

	public function employee()
	{
		return $this->belongsTo(Employee::class);
	}

	public function work()
	{
		return $this->belongsTo(Work::class);
	}
}
