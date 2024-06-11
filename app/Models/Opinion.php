<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Opinion
 * 
 * @property int $id
 * @property string $uuid
 * @property string|null $fio
 * @property string|null $label
 * @property string $review
 * @property int $rating
 * @property string|null $photo
 * @property string|null $screen
 * @property Carbon|null $reviewed_at
 * @property string $url
 * @property bool $published
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Opinion extends Model
{
	protected $table = 'opinions';

	protected $casts = [
		'rating' => 'int',
		'reviewed_at' => 'datetime',
		'published' => 'bool'
	];

	protected $fillable = [
		'uuid',
		'fio',
		'label',
		'review',
		'rating',
		'photo',
		'screen',
		'reviewed_at',
		'url',
		'published'
	];
}
