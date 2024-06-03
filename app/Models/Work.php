<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Work
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * 
 * @property Collection|Employee[] $employees
 *
 * @package App\Models
 */
class Work extends Model
{
	protected $table = 'works';
	public $timestamps = false;

	protected $fillable = [
		'name',
		'description'
	];

	public function employees()
	{
		return $this->belongsToMany(Employee::class)
					->withPivot('position');
	}
}
