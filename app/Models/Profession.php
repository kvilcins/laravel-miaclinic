<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Profession
 * 
 * @property int $profession_id
 * @property string $name
 * 
 * @property Collection|Employee[] $employees
 *
 * @package App\Models
 */
class Profession extends Model
{
	protected $table = 'professions';
	protected $primaryKey = 'profession_id';
	public $timestamps = false;

	protected $fillable = [
		'name'
	];

	public function employees()
	{
		return $this->belongsToMany(Employee::class);
	}
}
