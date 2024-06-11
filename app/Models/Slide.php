<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Slide
 * 
 * @property int $id
 * @property string $type
 * @property string $relation_model
 * @property int $relation_id
 * @property string $content
 * @property int|null $position
 * @property string|null $data
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Slide extends Model
{
	protected $table = 'slides';

	protected $casts = [
		'relation_id' => 'int',
		'position' => 'int'
	];

	protected $fillable = [
		'type',
		'relation_model',
		'relation_id',
		'content',
		'position',
		'data'
	];
}
