<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Affiliate
 * 
 * @property int $id
 * @property string|null $uuid
 * @property int $page_id
 * @property string $name
 * @property string|null $metro
 * @property string|null $metro_hex
 * @property string $address
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $time
 * @property bool $exist
 * @property int $priority
 * @property string|null $coordinates
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Employee[] $employees
 *
 * @package App\Models
 */
class Affiliate extends Model
{
	protected $table = 'affiliates';

	protected $casts = [
		'page_id' => 'int',
		'exist' => 'bool',
		'priority' => 'int'
	];

	protected $fillable = [
		'uuid',
		'page_id',
		'name',
		'metro',
		'metro_hex',
		'address',
		'phone',
		'email',
		'time',
		'exist',
		'priority',
		'coordinates'
	];

	public function employees()
	{
		return $this->belongsToMany(Employee::class);
	}
}
