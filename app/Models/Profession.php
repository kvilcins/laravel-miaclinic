<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Profession
 * 
 * @property int $id
 * @property string|null $uuid
 * @property int $page_id
 * @property string $name
 * @property string $multi_name
 * @property int $priority
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Page $page
 * @property Collection|Employee[] $employees
 *
 * @package App\Models
 */
class Profession extends Model
{
	protected $table = 'professions';

	protected $casts = [
		'page_id' => 'int',
		'priority' => 'int'
	];

	protected $fillable = [
		'uuid',
		'page_id',
		'name',
		'multi_name',
		'priority'
	];

	public function page()
	{
		return $this->belongsTo(Page::class);
	}

	public function employees()
	{
		return $this->belongsToMany(Employee::class);
	}
}
