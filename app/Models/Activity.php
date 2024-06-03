<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Activity
 * 
 * @property int $id
 * @property string $description
 * @property string|null $namespace
 * @property int|null $causer_id
 * @property string|null $relation_model
 * @property string|null $relation_id
 * @property string|null $model
 * @property Carbon $created_at
 *
 * @package App\Models
 */
class Activity extends Model
{
	protected $table = 'activity';
	public $timestamps = false;

	protected $casts = [
		'causer_id' => 'int'
	];

	protected $fillable = [
		'description',
		'namespace',
		'causer_id',
		'relation_model',
		'relation_id',
		'model'
	];
}
