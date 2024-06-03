<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Chunk
 * 
 * @property string $name
 * @property string $description
 * @property string $source
 * @property bool $enabled
 *
 * @package App\Models
 */
class Chunk extends Model
{
	protected $table = 'chunks';
	protected $primaryKey = 'name';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'enabled' => 'bool'
	];

	protected $fillable = [
		'description',
		'source',
		'enabled'
	];
}
