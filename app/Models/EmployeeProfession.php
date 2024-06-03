<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EmployeeProfession
 * 
 * @property int $employee_id
 * @property int $profession_id
 * 
 * @property Employee $employee
 * @property Profession $profession
 *
 * @package App\Models
 */
class EmployeeProfession extends Model
{
	protected $table = 'employee_profession';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'employee_id' => 'int',
		'profession_id' => 'int'
	];

	protected $fillable = [
		'employee_id',
		'profession_id'
	];

	public function employee()
	{
		return $this->belongsTo(Employee::class);
	}

	public function profession()
	{
		return $this->belongsTo(Profession::class);
	}
}
