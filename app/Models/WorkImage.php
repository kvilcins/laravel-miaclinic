<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class WorkImage
 * 
 * @property int $id
 * @property int $work_id
 * @property string $type
 * @property string $file
 * @property string|null $alt
 * 
 * @property Work $work
 *
 * @package App\Models
 */
class WorkImage extends Model
{
	protected $table = 'work_images';
	public $timestamps = false;

	protected $casts = [
		'work_id' => 'int'
	];

	protected $fillable = [
		'work_id',
		'type',
		'file',
		'alt'
	];

	public function work()
	{
		return $this->belongsTo(Work::class);
	}
}
