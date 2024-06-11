<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Router
 * 
 * @property int $id
 * @property string $slug
 * @property string $relation_model
 * @property int $relation_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Router extends Model
{
	protected $table = 'routers';

	protected $casts = [
		'relation_id' => 'int'
	];

	protected $fillable = [
		'slug',
		'relation_model',
		'relation_id'
	];
}
